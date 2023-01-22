import React from 'react'
import {Input} from 'antd'
import {useTranslation} from 'react-i18next'
export default function Search() {
  const {t} = useTranslation()
  return (
    <div>
      <div className='mx-2 my-5'>
        <Input placeholder={t('homepage.search')} />
      </div>
      <p>hello</p>
    </div>
  )
}