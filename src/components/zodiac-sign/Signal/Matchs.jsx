import React, { useEffect } from 'react';
import './Matchs.css'
import { Col, Row } from 'react-bootstrap';
import { LightSpeed } from 'react-reveal';

const Matchs = ({ information }) => {
  const publicURL = process.env.PUBLIC_URL;
  useEffect(() => {
    console.log(information)
  }, [information])
  
  return (
    <>
        <LightSpeed left>
            <Row className="main-sign my-5" >
                <div className="main-sign--back">
                    <img  
                      src={publicURL+ "/images/pages/red/sign/romboOther@2x.png"}
                      alt='Signo zoodiacal' />
                    <img  
                      src={publicURL+ "/images/pages/red/sign/romboLeo@2x.png"}
                        alt='Signo leo'/>
                </div>
                <div className="diamond">
                  <img className='w-100' src={publicURL + information.image} alt="Signal zoom" />
                </div>
            </Row>
        </LightSpeed>

        <LightSpeed right>
        <Row className='justify-content-center text-white text-start'>
          <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                <figure>
                    <img src={publicURL+'/images/pages/red/sign/titles/ser-mas-que-amigos.png'} alt="Ser mas que amigos" />
                  </figure>
             <Row className='mt-5'>
              <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                  <figure>
                    <img className='w-100' src={publicURL+ information.image1} alt={information.name} />
                  </figure>
                </Col>
                <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
                  <h3>{information.sign_one}</h3>
                  <h2>{information.percent_one}</h2>
                  <p className='mb-2'>De compatibilidad</p>
                  <p className='ff-gotham-book'>{information.description_one}</p>
                </Col>
             </Row>
          </Col>
          {/* Second result */}
          <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                <figure>
                    <img src={publicURL + '/images/pages/red/sign/titles/ser-mas-que-amigos.png'} alt="Ser mas que amigos" />
                  </figure>
             <Row className='mt-5'>
              <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                  <figure>
                    <img className='w-100' src={publicURL + information.image2} alt={information.name} />
                  </figure>
                </Col>
                <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
                  <h3>{information.sign_two}</h3>
                  <h2>{information.percent_two}</h2>
                  <p className='mb-2'>De compatibilidad</p>
                  <p className='ff-gotham-book'>{information.description_two}</p>
                </Col>
             </Row>
          </Col>
           {/* Three result */}
           <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                <figure>
                    <img src={publicURL + '/images/pages/red/sign/titles/ser-mas-que-amigos.png'} alt="Ser mas que amigos" />
                  </figure>
             <Row className='mt-5'>
              <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                  <figure>
                    <img className='w-100' src={publicURL +information.image3} alt={information.name} />
                  </figure>
                </Col>
                <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
                  <h3>{information.sign_three}</h3>
                  <h2>{information.percent_three}</h2>
                  <p className='mb-2'>De compatibilidad</p>
                  <p className='ff-gotham-book'>{information.description_three}</p>
                </Col>
             </Row>
          </Col>
        </Row>  
        </LightSpeed>
        
    </>
  )
}

export default Matchs
