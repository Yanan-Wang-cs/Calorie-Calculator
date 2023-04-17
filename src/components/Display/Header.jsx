import { React } from 'react'
import PropTypes from 'prop-types'

function Header({title, leftIcon='', rightContext='', rightIcon='', onClick=()=>{} }) {
  function goBack() {
    window.history.back()
  }
	
	return (
		<div className="flex flex-row w-full p-5 bg-secondary items-center text-text-primary box-border">
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
      {
        rightIcon ? 
        <i
          className={`icon iconfont ${rightIcon} text-xl cursor-pointer`}
          onClick={onClick}
        /> : ''
      }
		</div>
	)
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightContext: PropTypes.string,
  rightIcon: PropTypes.string,
  onClick: PropTypes.func,
}
export default Header
