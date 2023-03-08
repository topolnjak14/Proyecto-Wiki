import React from 'react';
import { useEffect, useState, useRef } from 'react';
import "../hojas-de-estilo/CategoriasSlide.css";


const CategoriasSlide = () => {

        const [categorias, setCategorias] = useState([]);
        const [indice, setIndice] = useState(0);
        const [inicioArrastre, setInicioArrastre] = useState(null);
        const [finArrastre, setFinArrastre] = useState(null);
        const contenedorRef = useRef(null);
      
        useEffect(() => {
          fetch('https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory')
            .then(response => response.json())
            .then(data => {
              setCategorias(data.Categorias);
            })
            .catch(error => {
              console.error(error);
            });
        }, []);
      
        useEffect(() => {
          const intervalo = setInterval(() => {
            setIndice(indice => (indice + 1) % categorias.length);
          }, 3000);
      
          return () => clearInterval(intervalo);
        }, [categorias.length]);
      
        const manejarInicioArrastre = evento => {
          setInicioArrastre(evento.clientX);
        };
      
        const manejarFinArrastre = evento => {
          setFinArrastre(evento.clientX);
      
          if (finArrastre && inicioArrastre) {
            if (finArrastre < inicioArrastre) {
              setIndice(indice => Math.min(indice + 1, categorias.length - 1));
            } else if (finArrastre > inicioArrastre) {
              setIndice(indice => Math.max(indice - 1, 0));
            }
          }
      
          setInicioArrastre(null);
          setFinArrastre(null);
        };
      
        const manejarArrastre = evento => {
          if (inicioArrastre) {
            const contenedor = contenedorRef.current;
            contenedor.style.cursor = 'grabbing';
            contenedor.style.transition = 'none';
            const desplazamiento = evento.clientX - inicioArrastre;
            contenedor.style.transform = `translateX(-${indice * 320 + desplazamiento}px)`;
          }
        };
      
        return (
          <div
            className="carrusel"
            onMouseDown={manejarInicioArrastre}
            onMouseUp={manejarFinArrastre}
            onMouseLeave={manejarFinArrastre}
            onMouseMove={manejarArrastre}
            ref={contenedorRef}
          >
            <h3 className='pt-3 ms-2 fw-bold'>Categorias</h3>
            <div className="carrusel-contenedor" style={{ transform: `translateX(-${indice * 320}px)` }}>
              {categorias.map(categoria => (
                <div className="carrusel-item rounded-3" style={{backgroundColor: "#49708A"}} key={categoria.id}>
                  <h3 className='text-center' style={{color: "#7BCD5F"}}>{categoria}</h3>
                </div>
              ))}
            </div>
          </div>
        );
}

export default CategoriasSlide;
