import {React, setState} from 'react'
import {Input} from 'antd'
import {useTranslation} from 'react-i18next'
import Header from '@/components/Display/Header'
export default function Search() {
  const {t} = useTranslation()
  const [searchValue, setSearchValue] = setState('')
  function handleChange(e) {
    setSearchValue(e.target.value)
  }
  return (
    <div>
      <Header title={t('search.title')} leftIcon='icon-fenxiang' />
      <div className='mx-2 my-5'>
        <Input placeholder={t('search.title')} value={searchValue} onChange={(e) => handleChange(e)} />
      </div>
    </div>
  )
}