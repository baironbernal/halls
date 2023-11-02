import React from 'react';
import './CardAstro.css';
import { LightSpeed } from 'react-reveal';

const CardAstro = () => {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <>
        <LightSpeed left>
          <section className="astro d-flex flex-column justify-content-center align-items-center">
                  <img src={publicURL + "/images/card-astro/hallsFinalSectGalax.svg"} alt='icePinkGalaxy' className="floating-image icePinkGalaxy mw-100" />
                  <img src={publicURL + "/images/card-astro/starGroupGalaxy.svg"} alt='cherryGalaxy2' className="floating-image cherryGalaxy2 mw-100" />
                  <img src={publicURL + "/images/card-astro/cherryGalaxyFinal.svg"} alt='cherryGalaxy2' className="floating-image cherryGalaxy2 mw-100" />
                  <img src={publicURL + "/images/card-astro/rueda.svg"} alt='Rueda' className="position-absolute mw-100" />
                  <div className="astro--cards">
                      <div className="astro--container">
                          <div className="astro--card one"></div>
                          <div className="astro--card two"></div>
                          <div className="astro--card three"></div>
                          <div className="astro--card four"></div>
                          <div className="astro--card five"></div>
                          <img src={publicURL + "/images/card-astro/titleAstro.svg"} alt='title-Astro' />
                      </div>
                  </div>
          </section>  
        </LightSpeed> 
    </>
  )
}

export default CardAstro
