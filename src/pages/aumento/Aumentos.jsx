import React, { useEffect } from 'react';
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
import { Zoom, Fade } from 'react-reveal';
import ReactPixel from 'react-facebook-pixel';
import TiktokPixel from 'tiktok-pixel';

const Aumentos = () => {

    const publicURL = process.env.PUBLIC_URL;

    useEffect(() => {  
        ReactPixel.pageView();
        TiktokPixel.pageView();
      }, []);

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
                <Zoom >
                    <figure>
                        <img className="mw-100" 
                        src={publicURL + "/images/pages/green/manifestando-barra.svg"} 
                        alt="Barra verde" /> 
                    </figure>
                </Zoom>
            </Row>
          
            <Row className="align-items-center my-5 gx-5 ">
                <Col lg={6}>
                    <Zoom>
                        <article>
                            <img className="mw-100 mb-5" 
                            src={publicURL + "/images/pages/green/workimpulsos.svg"} 
                            alt="Work impulsos" /> 
                            <p className="mt-3 text-white fs-5">
                            <span className='ff-gotham-bold'>#RespiraYTomaUnImpulsoReal</span> y ¡Descarga el tuyo!
                            </p>
                        </article>
                    </Zoom>
                </Col>
                <Col lg={6}>
                    {/* Swiper Work*/}
                    <Zoom>
                        <SwiperWork/>
                    </Zoom>
                </Col>
            </Row>
        </Container>
        <div className='position-relative'>
            {/* Camera picture */}
           <Fade top>
                <Row className="mb-5 position-relative">
                <div className="container overlay">
                    <img src={publicURL + "/images/pages/green/pepitas-clapper.png"} 
                    alt="Floating Images" 
                    className="pepitas floating-image mw-100 w-100" /> 
                </div>
                    <Clapperboard />
                    <p className="mt-4 text-white fs-5">#RespiraYTomaUnImpulsoReal para darla toda en el trabajo y seguir facturando.</p>
                </Row>
           </Fade>
            {/* Typsettings */}
            <br />
            
        </div>
        <Container>
            {/* Slider Tik Toks */}
            <Zoom>
                <Row className='position-relative'>
                    <div className="overlay">
                        <img src={publicURL + "/images/pages/green/pepitas-video.png"} 
                        alt="Floating Images" 
                        className="pepitas floating-image mw-100 w-100" /> 
                    </div>
                    <SwiperTiktok />
                </Row>
            </Zoom>
        </Container>
    </section>
    {/* Other categories */}
    <OtherCategories titleImageUrl={'/images/pages/green/otras-categorias.svg'} />
    </>
  )
}

export default Aumentos
