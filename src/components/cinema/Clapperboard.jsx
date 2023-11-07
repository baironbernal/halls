import React  from 'react';
import './Clapperboard.css';
import useClapper from '../../hooks/useClapper';
import Button from '../button/Button';

const Clapperboard = ({ isText }) => {
    const publicURL = process.env.PUBLIC_URL;
    const { seconds, minutes, hours , currentColor} = useClapper();
  return (
    <>
      <div className="video-work">
            <div className="recuadro-video" style={{
                maxWidth: isText ? '1000px' : '600px'
            }}>
                <div className="image-modo-cine">
                    <img src={publicURL + "/images/home/cuadro-cine.png"} alt="Cine cuadro"/>    
                </div>
                <div className="recgrabacion">
                    <div className="signal" id="signals" style={{backgroundColor: currentColor}}></div>
                    <img src={publicURL + "/images/home/rec.svg"} alt="Rec" /> 
                </div>
                <div id="contador">00:{hours < 10 ? '0' : ''}
                    {hours}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
                </div>

                {
                    isText && (
                        <div className="txt-videos-work" >
                            <p>Basta de apps y cursos de inglés. Mejor cómete un Halls y practica lipsync con estos videos que de aburridos no tienen nada. #RespiraYTomaUnImpulsoReal haz tu mejor performance en tu entrevista y sigue facturando.</p>
                            <div className="btn-section">
                                <a href="/">Leer más</a>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                isText && (
                    <div className='txt-videos-work-mobile'>
                    <p className='mt-3 text-white text-center fs-5'>
                        Basta de apps y cursos de inglés.Mejor cómete un Halls y practica lipsync con estos videos que de aburridos no tienen nada. #RespiraYTomaUnImpulsoReal haz tu mejor performance en tu entrevista y sigue facturando.
                    </p>
                        <div className="text-center">
                        <Button 
                            url={'/manifestando-aumentos'}
                            borderColor={'#00F98C'}
                            titleButton={'Leer más'}  />
                        </div>
                        <br/>
                        <br/>
                    </div>
                    
                )
            }
        </div>
    </>
  )
}

export default Clapperboard
