import React from 'react'
import './Policy.css';
import { Container } from 'react-bootstrap';
import '../../styles/keyframes.css';

const Policy = () => {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <>
        <div className="container-fluid overlay">
            <img src={publicURL + "/images/pages/green/bg-pepitas.png"} 
            alt="Floating Images" 
            className="pepitas floating-image mw-100 w-100" /> 
        </div>
    
        <section className='policy'>
          <Container>
            <h1 className='ff-gotham-book text-white'>Buenos días </h1>
          </Container>
        </section>
        
    </>
  )
}

export default Policy
