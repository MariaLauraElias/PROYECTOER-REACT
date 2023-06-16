import React from 'react';
//import imagen from '../assets/images/As-Card.jpg';
import '../assets/css/card.css';

function Card (props){
  return (
    <>
        {/* Asadores */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="proyecto">
          <img src={`../imagenes-Card/${props.cod}-Card.jpg`} alt={props.trabajos} />
          <div className="overlay">
            <p>{props.trabajos}</p>
            <div className="iconos-contenedor">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card