import { React, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input, InputNumber, Radio } from 'antd'
import Header from '@/components/Display/Header'
import { useNavigate } from 'react-router-dom'

export default function AddItem() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const [formItem, setFormItem] = useState({
    name: '',
    count: null,
    unit: '',
    calorie: '',
    protein: '',
    fat: '',
    carbohydrate: '',
  })
  const [calorieUnit, setCalorieUnit] = useState('kcal')
  const options = [
    { label: t('addItem.form.calorieUnit.kcal'), value: 'kcal'},
    { label: t('addItem.form.calorieUnit.kj'), value: 'kj'},
  ]
  function handleChange(e, key) {
    setFormItem({
      ...formItem,
      [key]: e.target.value,
    })
  }
  function handleRadioChange({target: {value}}) {
    setCalorieUnit(value)
  }
  function transferKj() {
    if(calorieUnit === 'kcal') return formItem.calorie
    return formItem.calorie / 4.18
  }
  function handleSave() {
    let kcal = transferKj()
    let params = {
      ...formItem,
      calorie: kcal,
    }
    let currentFood = JSON.parse(localStorage.getItem('foods') || '[]')
    currentFood.push(params)
    localStorage.setItem('foods', JSON.stringify(currentFood))
    navigate('/record')
  }
  function handleNumberChange(e, key) {
    setFormItem({
      ...formItem,
      [key]: e,
    })
  }
  
  return (
    <div>
      <Header title={t('addItem.title')} leftIcon='icon-add' rightContext={t('addItem.save')} onClick={handleSave} />
      {
        Object.keys(formItem).map(key => {
          return (
            <div key={key} className='
              px-5 py-3 flex flex-row justify-between items-center
              border-0 border-solid border-b border-border-primary'
            >
              <span>{ t(`addItem.form.${key}`) }</span>
              {
                ['name', 'unit'].indexOf(key) > -1 ? 
                <Input
                  value={formItem[key]}
                  allowClear={true}
                  placeholder={ t(`addItem.placeholder.${key}`) }
                  bordered={false}
                  className='input-textright text-right flex-1'
                  onChange={(e) => handleChange(e, key)}
                />
                :
                <InputNumber
                  min={0}
                  value={formItem[key]}
                  placeholder={ t(`addItem.placeholder.${key}`) }
                  className='input-textright input-number text-right flex-1'
                  bordered={false}
                  onChange={(e) => handleNumberChange(e, key)}
                />
              }
              {
                key === 'calorie' ? (
                  <Radio.Group
                    options={options}
                    onChange={handleRadioChange}
                    value={calorieUnit}
                    optionType='button'
                    buttonStyle='solid'
                  />
                ) : ''
              }
            </div>
          )
        })
      }
    </div>
  )
}