import { Button } from 'antd'
import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
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

			</div>
			<ul>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'myactive' : '')}
						to="/about/1"
						end
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'myactive' : '')}
						to="/home?id=1&name=myname"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'myactive' : '')}
						to="/test"
						state={{ id: 1, name: 'myname' }}
					>
						Test
					</NavLink>
				</li>
			</ul>
			<Button type="primary">Button</Button>
			{element}
			<Footer />
		</div>
	)
}
