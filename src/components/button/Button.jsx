import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Button = ({ url, titleButton, borderColor }) => {
  return (
    <>
      <button className='button-general rounded-5 px-4 py-2' style={{
        borderColor: borderColor
      }}>
        <Link to={url} className='text-white text-decoration-none z-1'>
          {titleButton}
          </Link>  
      </button>
    </>
  )
}

export default Button
