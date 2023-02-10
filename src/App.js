import {React, useEffect} from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import i18n from './locales'
import Footer from '@/components/Display/Footer'
import { ConfigProvider } from 'antd'

export default function App() {
	const element = useRoutes(routes)
	useEffect(() => {
		i18n.changeLanguage('en')
	}, [])
	return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00D2AA',
        },
      }}
    >
      <div className="flex flex-col flex-1">
        <div className='flex-1'>
          {element}
        </div>
        <Footer />
      </div>
    </ConfigProvider>
	)
}
