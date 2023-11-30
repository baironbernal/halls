import React from 'react'
import { Zoom } from 'react-reveal';
import './Emoji.css'

const Emoji = ({ url }) => {
  return (
    <>
      <Zoom>
              <picture className='emoji'>
                  <source srcset={url} type="image/webp" />
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif" 
                  alt="😆" />
                  <p className='text-white fs-5 mt-5'>¡Pronto volveremos con más consejos!</p>
              </picture>
        </Zoom>
    </>
  )
}

export default Emoji
