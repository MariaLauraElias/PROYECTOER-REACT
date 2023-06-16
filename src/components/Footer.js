import React from "react";
import {Link} from 'react-router-dom';
import iconoFooter from '../assets/images/A°I°.png';
import '../assets/css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer (){
  return (
    
      <footer className="bg-dark d-flex align-items-center justify-content-center flex-column">
        <img className="footer-logo rounded-circle" src={iconoFooter} alt="Icono footer" />
        <p className="footer-texto text-center">Estilo y calidad</p>
        <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link to="mailTo:estebanreal72@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope"></i>
          </Link>
        </div>
        <div class="derechos-de-autor">Hecho por Laura Elías &#169;</div>
      </footer>
    
  )
};

export default Footer;