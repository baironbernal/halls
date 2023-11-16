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
import { Zoom } from 'react-reveal';

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
                <Zoom >
                    <figure>
                        <img className="mw-100" src={publicURL + "/images/pages/red/amor-barra.svg"} alt="Barra de amor y astros" />
                    </figure>
                </Zoom>  
            </Row>
            {/*Break the ice*/}
            <Row className="my-5">
                <Zoom>
                        <article>
                            <img className="mw-100" src={publicURL + "/images/pages/red/mural-rompe-hielo.png"} alt="Mural rompe hielo"/>
                            <p className="mt-3 text-white fs-5">Ser el más extrovertido no asegura el éxito en la primer a cita. Rompe el hielo con Halls y estos tipcitos. 
                            <br/>¿Funcionan? No tenemos pruebas, pero tampoco dudas.#RespiraYTomaUnImpulsoReal y ponlos a prueba</p>
                        </article>
                </Zoom>
            </Row>
            <br/>
            <br/>
        </Container>
        <Container className='position-relative'>
            <Row className='justify-content-center'>
                    <div className="overlay">
                        <img src={publicURL + "/images/pages/red/pepitas-cards.png"} 
                        alt="Floating Images" 
                        className="pepitas floating-image mw-100 w-100" /> 
                    </div>
                     {/*Tinder Cards Love and Nope*/}
                <DatingCards className='my-5' />
            </Row>
            <br />
            <br />
        </Container>
        
        <Container className='position-relative'>
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
                <br />
                <br />
                <br />
                <ZodiacSign/>
            </Row>
            {/*Show info signal astro*/}
      
        </Container>
        <Row>
            <OtherCategories/>
        </Row>
    </section>
    </>
  )
}

export default Astros
