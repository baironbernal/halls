// Footer.js
import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  const publicURL = process.env.PUBLIC_URL;
  return (
    
<footer className="p-4">
    <div className="container">
        {/* Logo Halls  */}
        <div className="row text-center mb-4">
            <a className="navbar-brand" href="/">
                <img src={publicURL + "/images/logos/halls.svg"} alt="Halls Logo" />
            </a>
        </div>
            {/* Links copyright  */}
        <div className="row d-flex flex-column flex-lg-row justify-content-center gap-lg-5 mb-4 ff-gotham-bold">
                    <Link className="d-block text-decoration-none text-center w-auto" 
                    to={'/politicas-de-privacidad'}>Políticas de Privacidad</Link>

                    <Link to={'/politicas-de-privacidad'} className="d-block text-decoration-none text-center w-auto">
                        Aviso de Cookies
                    </Link>
                    <Link to={'/politicas-de-privacidad'} className="d-block text-decoration-none text-center w-auto">
                        Aviso legal
                    </Link>    
        </div>
        {/* Links social media  */}
        <div className="row d-flex justify-content-center gap-1 mb-4">
            <a href="#" className="d-block text-decoration-none text-center w-auto">
                <img src={publicURL + "/images/footer/facebook.svg"} alt="Facebook" />
            </a>
            <a href="#" className="d-block text-decoration-none text-center w-auto">
                <img src={publicURL + "/images/footer/instagram.svg"} alt="Instagram" />
            </a>
            <a href="#" className="d-block text-decoration-none text-center w-auto">
                <img src={publicURL + "/images/footer/youtube.svg"} alt="Youtube" />
            </a>    
        </div>
    </div>
</footer>
  );
};

export default Footer;