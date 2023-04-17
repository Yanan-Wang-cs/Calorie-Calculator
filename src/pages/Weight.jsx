import { React, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Display/Header'
import { InputNumber, message } from 'antd'
import LineCharts from '@/components/Common/LineCharts'
import { last } from 'lodash'

export default function Weight() {
  const { t } = useTranslation()
  const [weightList, setWeightList] = useState(JSON.parse(localStorage.getItem('weight')) || [])
  const [weight, setWeight] = useState(weightList.length > 0 ? last(weightList)[1] : 0)
  const [messageApi, contextHolder] = message.useMessage()
  function handleSave() {
    setWeightList([
      ...weightList,
      [Date.parse(new Date()), weight],
    ])
    localStorage.setItem('weight', JSON.stringify(weightList))
    messageApi.open({
      type: 'success',
      content: t('message.success'),
    })
  }
  function onChange(e) {
    setWeight(e)
  }
  
  return (
    <div>
      <Header title={t('recordWeight.title')} leftIcon='icon-fenxiang' rightIcon='icon-save' onClick={handleSave} />
      <div className='flex flex-col justify-center items-center w-full my-7'>
        <p>{t('recordWeight.tips')}</p>
        <InputNumber
          min={0}
          value={weight}
          onChange={onChange}
          className='mt-4'
        />
      </div>
      {contextHolder}
      { weightList.length? <LineCharts className='w-[80%] h-72' pointList={weightList} /> : '' }
    </div>
  )
}