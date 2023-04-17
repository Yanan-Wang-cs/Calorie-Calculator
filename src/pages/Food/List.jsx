import { React } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Display/Header'
import { useSelector, useDispatch } from 'react-redux'
import { selectFood, removeItem } from '@/redux/features/food'
import { useNavigate } from 'react-router-dom'
import { Popconfirm } from 'antd'

export default function List() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const foodList = useSelector(selectFood)
  function gotoAdd() {
    navigate('/food/addItem')
  }
  function handleRemove(id) {
    dispatch(removeItem(id))
  }
  return (
    <div>
      <Header
        title={t('foodList.title')}
        leftIcon='icon-fenxiang'
        rightIcon='icon-navlist'
        onClick={gotoAdd}
      />
      {
        foodList.map(item => {
          return (
            <div key={item.id} className='flex flex-row justify-between items-center px-5 py-3 border-solid border-0 border-b border-border-primary'>
              <p>{item.name}</p>
              <Popconfirm
                placement="right"
                title={t('foodList.delete')}
                okText={t('foodList.ok')}
                cancelText={t('foodList.cancel')}
                onConfirm={()=>handleRemove(item.id)}
              >
                <i className='icon iconfont icon-delete_light cursor-pointer' />
              </Popconfirm>
            </div>
          )
        })
      }
    </div>
  )
}