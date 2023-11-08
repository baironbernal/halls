import React from 'react'
import Button from '../button/Button';

//Animations
import {  Zoom } from 'react-reveal';

const Category = ({ imageUrl, borderColor, url }) => {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <>
    <Zoom>
      <article className="d-block text-decoration-none text-center w-auto mx-0 z-1">
              <img className="d-block mw-100 mx-auto w-auto" src={publicURL+imageUrl} alt="fluye en la u"/>
              <Button url={url} 
                    titleButton={'Leer más'}
                    borderColor={borderColor} />
        </article>
    </Zoom>
      
    </>
  )
}

export default Category
