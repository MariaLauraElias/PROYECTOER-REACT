import React from 'react';
import '../assets/css/titles.css';

function Titles (props){
  return(
    <div className='titles'>
      <h2 className="seccion-titulo ">{props.title}</h2>
      <h3 className="seccion-descripcion">{props.description}</h3>
    </div>
  )
}

export default Titles