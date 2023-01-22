import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function Test(props) {
  const {
    state: { id, name },
  } = useLocation()
  const { myprop, age } = props
  return (
    <div>
      Test, {id}, {name}, {myprop}, {age}
    </div>
  )
}
Test.propTypes = {
  myprop: PropTypes.string,
  age: PropTypes.number,
}
Test.defaultProps = {
  myprop: 'default value',
  age: 18,
}

export default Test
