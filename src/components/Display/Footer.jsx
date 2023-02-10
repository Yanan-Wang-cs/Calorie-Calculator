import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from './menu'
import { useTranslation } from 'react-i18next'

export default function Header() {
	
	const { t } = useTranslation()
	return (
		<div className="flex flex-row justify-evenly bg-secondary items-center text-white">
      {menu.map((item, index) => {
        return <NavLink className={({isActive})=>`${isActive ? 'opacity-100' : 'opacity-40'} text-text-primary p-5 cursor-pointer no-underline`} key={`menu${index}`} to={item.path}>{t(`menu.${item.key}`)}</NavLink>
      })}
		</div>
	)
}
