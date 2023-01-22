import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet, useParams } from 'react-router-dom'
// import i18n from './locales'

export default function About() {
  const { t } = useTranslation()
  const [sum, setSum] = useState(1)
  const [name, setName] = useState('tom')
  const { id } = useParams()
  function add() {
    // setSum(sum + 1)
    setSum(sum => sum + 1)
    setName('jack')
  }
  // i18n.changeLanguage('zh')
  return (
    <>
      <div>{t('title')}</div>
      <h1>
        About, {sum}, {id}, {name}
      </h1>
      <NavLink to="news" state={{ id: 1, name: 'myname' }}>
        About
      </NavLink>
      <button onClick={add}>click</button>
      <Outlet />
    </>
  )
}
