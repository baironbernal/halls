import React, { useState } from 'react'
import './Honey.css'
import Button from '../button/Button'

const Honey = () => {
  const publicURL = process.env.PUBLIC_URL;

  const [isClassActive, setIsClassActive] = useState(false);

  const toggleClass = () => {
    setIsClassActive((prevIsClassActive) => !prevIsClassActive);
  };

  return (
    <>
      <div className="work-impulso" id='work-impulso'>
        <figure className='work-impulso--title position-relative'>
            <img src={publicURL+"/images/home/workimpulsos-title.svg"} 
            alt="work-impulsos title" className='mw-100' />
        </figure>
          <div className="container-workimpulso">
            <figure id='div1'>
                <img
                id="imagenMover"
                onClick={toggleClass}
                className={isClassActive ? 'mover-derecha' : ''}
                src={publicURL + "/images/home/pastilla-workimpulso.svg"}
                alt="Halls"
                />
            </figure>
            <div className={isClassActive ? 'text-workimpulso mover-izquierda' : 'text-workimpulso'} id='textoMover'>
              <h2 className="m-0">#RespiraYTomaUnImpulsoReal</h2>
              <p>
                y haz eso que te apasiona con los workimpulsos. Pedir
                vacaciones, un aumento o salir temprano los viernes ahora con
                Halls es posible.
              </p>
              <Button url={'/manifestando-aumentos'} titleButton={'Desliza para leer más'} />
            </div>

            <div className="text-workimpulso-mobile">
                <Button url={'/manifestando-aumentos'} titleButton={'Desliza'} />
            </div>
          </div>
        </div>
    </>
  )
}

export default Honey
