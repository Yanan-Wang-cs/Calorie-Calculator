import {React} from 'react'
import { Input } from 'antd'
import { useTranslation } from 'react-i18next'
import {useNavigate} from 'react-router-dom'
export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  function gotoSearch() {
    navigate('/search')
  }
  return (
    <div>
      <div className='mx-2 my-5'>
        <Input placeholder={t('homepage.search')} onClick={gotoSearch} />
      </div>
      
    </div>
  )
}
