import React from 'react';
import "../hojas-de-estilo/Menu.css";
import Categorias from "./Categorias";

//Logica 

//1 Utilizamos el operador ternario
//2 Es isOpen verdader?
    //Si: Asignamos la clase sidebar open//True al Menu
    //No: Asignamos la clase sidebar    //False al Menu

const MenuLateral = ({isOpen, toggleMenu}) => {

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <i onClick={toggleMenu} class="bi bi-arrow-left fs-1"></i>
                <Categorias/>
        </div>
    );
}

export default MenuLateral;
             


