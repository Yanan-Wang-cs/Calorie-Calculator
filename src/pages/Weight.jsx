import { React, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Display/Header'
import { InputNumber } from 'antd'
import LineCharts from '@/components/Common/LineCharts'

export default function Weight() {
  const { t } = useTranslation()
  const weightList = JSON.parse(localStorage.getItem('weight')) || []
  const [weight, setWeight] = useState(weightList[0] ?? 0)
  function handleSave() {
    weightList.push(weight)
    localStorage.setItem('weight', JSON.stringify(weightList))
  }
  function onChange(e) {
    setWeight(e)
  }
  
  return (
    <div>
      <Header title={t('recordWeight.title')} leftIcon='icon-add' rightContext={t('recordWeight.save')} onClick={handleSave} />
      <div className='flex flex-col justify-center items-center w-full my-7'>
        <p>{t('recordWeight.tips')}</p>
        <InputNumber
          min={0}
          value={weight}
          onChange={onChange}
          className='mt-4'
        />
      </div>
      <LineCharts className='w-72 h-36' pointList={weightList} />
    </div>
  )
}