import React from 'react'
import '../../styles/keyframes.css';

import './Fluye.css';
import ContainerMap from '../../components/map/ContainerMap';
import OtherCategories from '../../components/category/OtherCategories';
import { Col, Container, Row } from 'react-bootstrap';
import { LightSpeed } from 'react-reveal';
import DatingCards from '../../components/tinder/DatingCards';

const Fluye = () => {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <>
    <div className="container-fluid overlay">
        <img src={publicURL + "/images/pages/purple/bg-pepitas.png"} 
        alt="Floating Images" 
        className="pepitas floating-image mw-100 w-100" /> 
    </div>
      <section className='fluye text-center ff-gotham-medium'>
        <Container className='py-5'>
            <Row>
              <LightSpeed right>
                  <figure className='mb-5'>
                      <img className="mw-100" 
                      src={publicURL + "/images/pages/purple/fluye-barra.svg"} alt="Barra purple" /> 
                  </figure>
              </LightSpeed>
                
            </Row>
        </Container>

          {/* Zone Maps */}
          <LightSpeed left>
            <ContainerMap/>
          </LightSpeed>
            
          {/* Zone Maps End */}
        <Row className='text-center'>
        <p className='text-white fs-5 mt-5'>¿Nuevo en la zona? Dile no a los sitios más básicos del lugar. #RespiraYTomaUnImpulsoReal <br />
          con Halls y sé el anfitrión más cool entre tus amigos.</p>
        </Row>

      <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={12} lg={6} xl={6} style={{
          height:'100%',
          maxWidth: '40rem',          
        }}>
                <article>
                  <figure className='text-center mw-100'>
                    <img className='mw-100' src={publicURL + "/images/pages/purple/consejos.png"} alt="Consejos de último semestre" />
                  </figure>
                  <p className='text-white'>¿Listo para dejar de ser ese “primíparo” <br />
                    que no pasa desapercibido?</p>
                </article>
        </Col>
        <Col xs={12} md={12} lg={6} xl={6} style={{
          height:'100%',
          maxWidth: '40rem',
          alignSelf: 'center'
        }} id='containerCardsSlide'>
            {/*Tinder Cards Love and Nope*/}
              <DatingCards className='my-5' />
        </Col>
      </Row>
      <Row>
        <OtherCategories/>
      </Row>
      </section>

    </>
  )
}

export default Fluye
