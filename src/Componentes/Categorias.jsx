import React from 'react';
import { useEffect, useState } from 'react';


const Categorias = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory") ///este link devuelve una promesa
          .then ((response) => response.json()) //cuando tengamos la respuesta pasarla a json
          .then((data) => setData(data.Categorias));//
     }, []); //array vacio[], se ejecutara una vez cuando se llame el componente
  
    return (
      <div>
          <ul>
            {data?.map((categoria) => (
                <li key={categoria}>{categoria}</li>
            ))}
          </ul>  
      </div>
    );
  }

export default Categorias;
