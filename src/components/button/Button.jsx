import React from 'react'
import './Button.css';


const Button = ({ url, titleButton, borderColor }) => {
  return (
    <>
      {
        url ? (
          <button className='button-general rounded-5 px-4 py-2' style={{
          borderColor: borderColor
        }}>
          <a href={url} className='text-white text-decoration-none z-1'>
            {titleButton}
            </a>  
          </button>
        ): 
        <button className='button-general rounded-5 px-4 py-2' style={{
          borderColor: borderColor
        }}>
          <span className='text-white text-decoration-none z-1'>
            {titleButton}
            </span>  
        </button>
      }
      
    </>
  )
}

export default Button
