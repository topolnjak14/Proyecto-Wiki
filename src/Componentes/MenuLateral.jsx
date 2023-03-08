import React from 'react';
import "../hojas-de-estilo/Menu.css";
import Categorias from "./Categorias";
import { IconArrowNarrowLeft } from '@tabler/icons-react';

//Logica 

//1 Utilizamos el operador ternario
//2 Es isOpen verdader?
    //Si: Asignamos la clase sidebar open//True al Menu
    //No: Asignamos la clase sidebar    //False al Menu

const MenuLateral = ({isOpen, toggleMenu}) => {

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <IconArrowNarrowLeft className='ms-2 pt-3' onClick={toggleMenu} style = {{width:"3em", height: "auto", color: "#49708A"}} /> 
                <Categorias/>
        </div>
    );
}

export default MenuLateral;
             


