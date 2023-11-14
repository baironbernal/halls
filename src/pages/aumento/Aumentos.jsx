import React from 'react';
//Styles
import './Aumentos.css';
import '../../styles/keyframes.css';
//Components
import Clapperboard from '../../components/cinema/Clapperboard';
import OtherCategories from '../../components/category/OtherCategories';
import SwiperWork from '../../components/swipers/workimpulsos/SwiperWork';
import SwiperTiktok from '../../components/swipers/tiktok/SwiperTiktok';

//Boostrap
import { Col, Container, Row } from 'react-bootstrap';
//Animations
import { LightSpeed, Zoom, Bounce, Fade } from 'react-reveal';


const Aumentos = () => {

    const publicURL = process.env.PUBLIC_URL;

  return (
    <>
      
    
    <section className="manifestando-aumentos text-center ff-gotham-medium">
        <div className="container-fluid overlay">
            <img src={publicURL + "/images/pages/green/bg-pepitas.png"} 
            alt="Floating Images" 
            className="pepitas floating-image mw-100 w-100" /> 
        </div>
        <Container className="py-5">
            <Row className>
                <LightSpeed right>
                    <figure>
                        <img className="mw-100" 
                        src={publicURL + "/images/pages/green/manifestando-barra.svg"} 
                        alt="Barra verde" /> 
                    </figure>
                </LightSpeed>
            </Row>
          
            <Row className="align-items-center my-5 gx-5 ">
                <Col lg={6}>
                    <Bounce left>
                        <article>
                            <img className="mw-100 mb-5" 
                            src={publicURL + "/images/pages/green/workimpulsos.svg"} 
                            alt="Work impulsos" /> 
                            <p className="mt-3 text-white fs-5">
                            #RespiraYTomaUnImpulsoReal y haz eso que te apasiona con 
                            los workimpulsos. Pedir vacaciones, un aumento o salir temprano 
                            los viernes ahora con Halls es posible ¡Descarga el tuyo!
                            </p>
                        </article>
                    </Bounce>
                </Col>
                <Col lg={6}>
                    {/* Swiper Work*/}
                    <Bounce right>
                        <SwiperWork/>
                    </Bounce>
                </Col>
            </Row>
        </Container>
        <div className='position-relative'>
        <div className="container-fluid overlay">
            <img src={publicURL + "/images/pages/green/bg-pepitas-4.png"} 
            alt="Floating Images" 
            className="pepitas floating-image mw-100 w-100" /> 
        </div>
            {/* Camera picture */}
           <Fade top>
                <Row className="my-5 position-relative">
                    <Clapperboard />
                    <p className="mt-3 text-white fs-5">#RespiraYTomaUnImpulsoReal para hablar sin trabarte y alégrate porque <br/>el inglés ya no será un problema si lo que quieres es facturar.</p>
                </Row>
           </Fade>
            {/* Typsettings */}
            <Zoom>
                <Row className="d-flex justify-content-center align-items-center gap-1 mb-4 my-5">
                    <a href="/" className="d-block text-decoration-none text-center w-auto">
                        <img src={publicURL + "/images/pages/green/instagram-icon.svg"} alt="Icon Instagram" /> 
                    </a>
                    <span className="d-block text-center text-white w-auto fs-3"> @typesetting </span>
                </Row>
            </Zoom>

            {/* Slider Tik Toks */}
            <Zoom>
                <Row className='position-relative'>
                    <SwiperTiktok/>
                </Row>
            </Zoom>
        </div>
    </section>
    {/* Other categories */}
    <OtherCategories titleImageUrl={'/images/pages/green/otras-categorias.svg'} />
    </>
  )
}

export default Aumentos
