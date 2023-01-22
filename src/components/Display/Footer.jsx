import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from './menu'
import { useTranslation } from 'react-i18next'

export default function Header() {
	
	const { t } = useTranslation()
	console.log(menu)
	return (
		<div className="flex flex-row bg-teal-800 items-center">
			<div className="text-white">
				<div className="flex flex-row">
					{menu.map((item, index) => {
						return <NavLink className={({isActive})=>`${isActive ? 'opacity-100' : 'opacity-40'} text-white p-5 cursor-pointer no-underline`} key={`menu${index}`} to={item.path}>{t(`menu.${item.key}`)}</NavLink>
					})}
				</div>
			</div>
		</div>
	)
}
