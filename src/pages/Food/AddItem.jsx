import { React, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input, InputNumber, Radio, Select } from 'antd'
import Header from '@/components/Display/Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '@/redux/features/food'
import { v4 as uuidv4 } from 'uuid'

export default function AddItem() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [formItem, setFormItem] = useState({
    name: '',
    count: null,
    calorie: '',
    protein: '',
    fat: '',
    carbohydrate: '',
  })
  const [calorieUnit, setCalorieUnit] = useState('kcal')
  const [unit, setUnit] = useState('ml')
  const countUnitObject = t('addItem.form.countUnit', {returnObjects: true})
  const unitOptions = Object.keys(countUnitObject).reduce((arr, key) => {
    arr.push({value: key, label: countUnitObject[key]})
    return arr
  }, [])
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
  function transferKj() {
    if(calorieUnit === 'kcal') return formItem.calorie
    return formItem.calorie / 4.18
  }
  function handleSave() {
    let kcal = transferKj()
    let params = {
      ...formItem,
      calorie: kcal,
      unit: unit,
      id: uuidv4(),
    }
    dispatch(addItem(params))
    navigate('/food/list')
  }
  function handleNumberChange(e, key) {
    setFormItem({
      ...formItem,
      [key]: e,
    })
  }
  return (
    <div>
      <Header title={t('addItem.title')} leftIcon='icon-fenxiang' rightIcon='icon-save' onClick={handleSave} />
      {
        Object.keys(formItem).map(key => {
          return (
            <div key={key} className='
              px-5 py-3 flex flex-row justify-between items-center
              border-0 border-solid border-b border-border-primary'
            >
              <span>{ t(`addItem.form.${key}`) }</span>
              {
                ['name'].indexOf(key) > -1 ? 
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
                    onChange={(e) => {setCalorieUnit(e.target.value)}}
                    value={calorieUnit}
                    optionType='button'
                    buttonStyle='solid'
                  />
                ) : ''
              }
              {
                key === 'count' ? (
                  <Select 
                    defaultValue={unit}
                    bordered={false}
                    options={unitOptions}
                    onChange={(e) => {setUnit(e)}}
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