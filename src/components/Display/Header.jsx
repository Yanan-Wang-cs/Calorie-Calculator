import { React } from 'react'
import PropTypes from 'prop-types'

function Header({title, leftIcon='', rightContext='', onClick=()=>{} }) {
  function goBack() {
    window.history.back()
  }
	
	return (
		<div className="flex flex-row w-full py-5 bg-secondary items-center text-text-primary px-2 box-border">
			{ 
        leftIcon ? 
        <i
          className={`icon iconfont ${leftIcon} text-xl cursor-pointer`}
          onClick={goBack}
        />
        :
        <img
          src={require('@/assets/images/logo.png')}
          alt="logo"
          className="w-14 h-8"
        />
      }
			<div className="text-center w-full mr-14">
				{title}
			</div>
      {rightContext ? <span className='cursor-pointer' onClick={onClick}>{rightContext}</span> : '' }
		</div>
	)
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightContext: PropTypes.string,
  onClick: PropTypes.func,
}
export default Header
