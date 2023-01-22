import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Home() {
  const [search] = useSearchParams()
  let id = search.get('id')
  let name = search.get('name')
  const navigate = useNavigate()
  const myRef = React.useRef()
  function showDetail() {
    navigate('/test', { state: { id: 2, name: 'mytest' } })
    // navigate(-1)
  }
  function show() {
    console.log(myRef.current.value)
  }
  return (
    <div>
      Home, {id}, {name}
      <button onClick={showDetail}>Jump</button>
      <input type="text" ref={myRef} />
      <button onClick={show}>show</button>
    </div>
  )
}
