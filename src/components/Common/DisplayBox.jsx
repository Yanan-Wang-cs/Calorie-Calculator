import React from 'react'
import PropTypes from 'prop-types'

function DisplayBox({ title, description='', className='', icon='', onClick=()=>{} }) {
  return (
    <div onClick={onClick} className={`cursor-pointer flex flex-row justify-evenly items-center bg-primary text-text-primary p-5 rounded-md ${className}`}>
      <div>
        <p className='text-lg'>{title}</p>
        <p className='text-xs'>{description}</p>
      </div>
      <div>
        <span className={`icon iconfont ${icon} text-4xl`} />
      </div>
    </div>
    
  )
}
DisplayBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
}

export default DisplayBox