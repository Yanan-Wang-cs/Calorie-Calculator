import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import i18n from './locales'
import Header from '@/components/Display/Header'
import Footer from '@/components/Display/Footer'

export default function App() {
	const element = useRoutes(routes)
	React.useEffect(() => {
		i18n.changeLanguage('en')
		return () => {
			console.log('unmount')
		}
	}, [])
	return (
		<div className="flex flex-col flex-1">
			<Header />
			<div className='flex-1 overflow-scroll'>
				{element}
			</div>
			<Footer />
		</div>
	)
}
