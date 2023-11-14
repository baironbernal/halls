import React from 'react';
//Styles
import './Astros.css';
import '../../styles/keyframes.css';
//Components
import CardAstro from '../../components/cards-astros/CardAstro';
import DatingCards from '../../components/tinder/DatingCards';
import ZodiacSign from '../../components/zodiac-sign/ZodiacSign';
//Boostrap
import { Container, Row } from 'react-bootstrap';
import OtherCategories from '../../components/category/OtherCategories';

//Animations
import { LightSpeed } from 'react-reveal';

const Astros = () => {

   const publicURL = process.env.PUBLIC_URL;

  return (
    <>
    
      <section className="amor-astros text-center">

      <div className="container-fluid overlay">
        <img src={publicURL + "/images/pages/red/bg-pepitas.png"} alt="Floating Images" className="pepitas floating-image mw-100 w-100" /> 
    </div>

        <Container className="py-5">
            {/*Dramatic, love , astral picture*/}
            <Row className="my-5">
            <LightSpeed right>
                <figure>
                    <img className="mw-100" src={publicURL + "/images/pages/red/amor-barra.svg"} alt="Barra de amor y astros" />
                </figure>
            </LightSpeed>
                
            </Row>
            {/*Break the ice*/}
            <Row className="my-5">
                <LightSpeed left>
                        <article>
                            <img className="mw-100" src={publicURL + "/images/pages/red/mural-rompe-hielo.png"} alt="Mural rompe hielo"/>
                            <p className="mt-3 text-white fs-5">Ser el más extrovertido no asegura el éxito en la primer a cita. Rompe el hielo con Halls y estos tipcitos. 
                            <br/>¿Funcionan? No tenemos pruebas, pero tampoco dudas.#RespiraYTomaUnImpulsoReal y ponlos a prueba</p>
                        </article>

                </LightSpeed>
            </Row>
            <br/>
            <br/>
            {/*Tinder Cards Love and Nope*/}

            <Row className='justify-content-center'>
                <DatingCards className='my-5' />
            </Row>
            <br />
            <br />
        </Container>
        <div className='position-relative'>
        <div className="container-fluid overlay">
            <img src={publicURL + "/images/pages/red/bg-pepitas.png"} alt="Floating Images" className="pepitas floating-image mw-100 w-100" /> 
        </div>

        <Container>
            {/*Astro Effect*/}
            <Row className="z-0 position-relative">
                <CardAstro/>
            </Row>
            <br />
            <br />
            <Row>
            <p className="mt-3 text-white fs-5">
                ¿Tienes más de un crush? Nada que un Halls no pueda resolver. #TomaUnImpulsoReal <br />
                y descubre quién te conviene. ¿Aries, Tauro, Libra?
            </p>
            
            </Row>
            
            {/*Form astro*/}
            <Row className="my-5">
                <p className="text-center text-white fs-3 ff-gotham-bold ">Claro que sabes tu signo ¡Escríbelo aquí!</p>
                <ZodiacSign/>
            </Row>
            {/*Show info signal astro*/}
      
        </Container>
        </div>
            <Row>
                <OtherCategories/>
            </Row>
    </section>
    </>
  )
}

export default Astros
