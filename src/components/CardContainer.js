import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/css/cardContainer.css'
import Card from './Card';

function CardContainer (){
  const [works, setWorks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3003/trabajos')
          .then(res => res.json())
            .then((data)=>{
               
               setWorks(data.data);
             
            })
      },[])

  return (
    <React.Fragment>
      <section id="queHacemos" className="proyectos-recientes seccion-clara d-flex flex-column">
    <h2 className="seccion-titulo texto-negro">QUÉ HACEMOS...</h2>
    <h3 className="seccion-descripcion">Estas son nuestras especialidades</h3>
    <div className="container text-center proyectos-contenedor">
      <div className="row">
      {
        works.length > 0 && works.map( ( work , i) => {
            return <Card {...work} key={i}/>
        })
      }
      </div>
    </div>
    </section>
    </React.Fragment>
  )
}
export default CardContainer;