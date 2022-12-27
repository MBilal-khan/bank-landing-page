import React from 'react'
import styles from '../style'
const Button = ({styles}) => {
  return (
    <div className={`py-4 px-6 bg-blue-gradient font-poppins rounded-[10px] font-medium text-primary outline-none ${styles} `}>Get Started</div>
  )
}

export default Button