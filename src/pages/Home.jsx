import {React} from 'react'
import { Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import DisplayBox from '../components/Common/DisplayBox'
import Header from '@/components/Display/Header'

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  function gotoSearch() {
    navigate('/search')
  }
  function gotoPage(path) {
    navigate(path)
  }
  return (
    <div>
      <Header title={t('title')} />
      <div className='mx-2 my-5'>
        <Input placeholder={t('homepage.search')} onClick={gotoSearch} />
      </div>
      <DisplayBox
        title={t('addItem.title')}
        description={t('addItem.description')}
        onClick={() => gotoPage('/food/addItem')}
        icon={'icon-add'}
        className='mx-2 my-5'
      />
      <DisplayBox
        title={t('recordDiet.title')}
        description={t('recordDiet.description')}
        onClick={() => gotoPage('/record')}
        icon={'icon-add'}
        className='mx-2 my-5'
      />
      <DisplayBox
        title={t('recordWeight.title')}
        description={t('recordWeight.description')}
        onClick={() => gotoPage('/weight')}
        icon={'icon-add'}
        className='mx-2 my-5'
      />
      <DisplayBox
        title={t('foodList.title')}
        description={t('foodList.description')}
        onClick={() => gotoPage('/food/list')}
        icon={'icon-add'}
        className='mx-2 my-5'
      />
      
    </div>
  )
}

export default Home