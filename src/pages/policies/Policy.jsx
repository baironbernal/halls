import React from 'react'
import './Policy.css';
import { Container } from 'react-bootstrap';
import '../../styles/keyframes.css';

const Policy = () => {
  
  return (
    <>
        
        <section className='policy'>  
        <Container className='py-4'>
      
        <h2>AVISO DE COOKIE</h2>
            <p>Una cookie es un pequeño archivo de texto que se guarda en tu ordenador o en tu móvil cuando visitas una página web. En cada visita, las Cookies se envían nuevamente a la página web original, o a otra web que reconoce esa cookie, para desarrollar un historial de tu actividad online. Las Cookies de esta web pueden ser:</p>
            <ul class="list-marker"> • <li>borradas automáticamente después de cada visita (cookies de sesión) o que permanezcan durante múltiples visitas (cookies persistentes);</li> • <li>distribuidas en un contexto de primeros (configuradas por nosotros) o de terceros (configuradas por otra web).</li>
            </ul>
            <p>En esta página web, nosotros y terceros, usamos cookies con distintos propósitos, como facilitar tu navegación, personalizar el contenido, adaptar la publicidad a tus intereses, y medir el uso de la web. Específicamente, usamos las siguientes cookies: </p>
            
            <div id="ot-sdk-cookie-policy"></div>
            
            <h2>COOKIES DE TERCEROS. </h2>
            <p>Al usar nuestra web, puedes encontrar contenido integrado, o puedes ser redirigido a otras webs para ciertas actividades. Estas webs y el contenido integrado, pueden usar sus propias cookies. No tenemos control sobre las cookies de otras páginas web, aunque hayas sido redirigido desde nuestra web.</p>
            <p>Nuestra Herramienta de Preferencias de Cookies puede ser usada para personalizar tus preferencias de cookies. Esta herramienta registrará tu consentimiento acerca de nuestra política de cookies. El consentimiento se solicitará de nuevo cada 12 meses, para asegurar que estás al día de los cambios de nuestra política de cookies. Nuestra herramienta controla las cookies configuradas por nosotros relativas a las cookies Analíticas de Rendimiento, Técnicas y Publicitarias.</p>
            <p>Las cookies Estrictamente Necesarias no se pueden deshabilitar, la herramienta tampoco puede bloquear cookies de terceros en otras webs que estén ligadas a la nuestra. Muchas de las cookies de nuestra web pueden ser también habilitadas o deshabilitadas a través de tu navegador.</p>
            <p>Para hacer esto, sigue las instrucciones que habitualmente se encuentran en los menús de “Ayuda”, “Herramientas” o “Editar” de tu navegador. Por favor ten en cuenta que deshabilitar una cookie o una categoría de cookies no borra las cookies de tu navegador a no ser que lo hagas manualmente desde la función de tu navegador.</p>
            
            <button id="ot-sdk-btn" class="ot-sdk-show-settings"> Cookie Settings</button>
        </Container>
        </section>
        
    </>
  )
}

export default Policy


