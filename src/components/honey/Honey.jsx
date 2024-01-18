import React, { useState } from 'react'
import './Honey.css'
import Button from '../button/Button'
import { useHistory } from 'react-router-dom';

const Honey = () => {
  const publicURL = process.env.PUBLIC_URL;

  const [isClassActive, setIsClassActive] = useState(false);
  const history = useHistory();

  const toggleClass = () => {
    setIsClassActive((prevIsClassActive) => !prevIsClassActive);
    
    // Use the setTimeout function to delay the redirect by 1 second (1000 milliseconds).
    setTimeout(() => {
      history.push('/colombia/manifestando-aumentos');  // Replace '/destination' with your target URL.
    }, 1000);
  };

  return (
    <>
      <div className="work-impulso" id='work-impulso'>
              <div className="container-fluid overlay">
                  <img src={publicURL + "/images/home/pepitas-honey.png"} 
                  alt="Floating Images" 
                  className="pepitas floating-image mw-100 w-100" /> 
              </div>
        <figure className='work-impulso--title'>
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
              <h2 className="m-0"><span className='ff-gotham-bold'>#RespiraYTomaUnImpulsoReal</span></h2>
              <p>
              para pedir vacaciones, un aumento o salir temprano los
              viernes y hacer eso que te apasiona.
              </p>
              <Button url={'/colombia/manifestando-aumentos'} titleButton={'Desliza para leer más'} />
            </div>

            <div className={isClassActive ? 'text-workimpulso-mobile mover-izquierda' : 'text-workimpulso-mobile'} id='mover-izquierda-button'>
                <Button url={'/colombia/manifestando-aumentos'} titleButton={'Desliza'} />
            </div>
          </div>
        </div>


        <div class="slide-honey-mobile">
          <p class="mt-3 text-white fs-5">
                <span style={{
                  color: '#00F98C'
                }}>#RespiraYTomaUnImpulsoReal </span>
                y haz eso que te apasiona con los workimpulsos. <br/>
                Pedir vacaciones, un aumento o salir temprano los viernes ahora con <br/>
                Halls es posible.
          </p>
        </div>
    </>
  )
}

export default Honey
