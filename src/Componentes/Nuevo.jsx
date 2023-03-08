import React from 'react';
import "../hojas-de-estilo/Nuevo.css";

const Nuevo = () => {
    return (
        <div className='pt-2 '>
            <div className="card mx-auto ">
            <img 
                    className='imagen-testimonio'
                    src={require('../Assets/ia.jpg')}
                    alt='Imagen de Diwght'/>

                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Nuevo;

           
                
