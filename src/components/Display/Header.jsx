import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
	
	const { t } = useTranslation()
	return (
		<div className="flex flex-row w-full py-5 bg-teal-800 items-center">
			<img
				src={require('@/assets/images/logo.png')}
				alt="logo"
				className="w-14 h-8"
			/>
			<div className="text-white text-center w-full mr-14">
				{t('title')}
			</div>
		</div>
	)
}
