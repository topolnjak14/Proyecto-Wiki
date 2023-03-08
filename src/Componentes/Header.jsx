import React from 'react';
import MenuLateral from './MenuLateral';
import { useState } from 'react';
import { ReactComponent as MySvg } from "../Assets/LogoDark.svg";
import { IconCategory2 } from '@tabler/icons-react';

//Logica 

//1 Creamos un estado con calor unicial false
//2 Si al nuevo estado (setIsOpen) le agregamos (!isOpen) negado actuará como interruptor
//3 El incono debe llevar el evento con la funcion toggleMenu
//4 El componente <MenuLateral/> recibirá como props isOpen y toggleMenu

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


    return (
        <div className='d-flex justify-content-between align-items-center pt-4 m-2'>
            <div>
                <MySvg style = {{width:"15em", height: "auto"}} />
            </div>

            <div>
                <IconCategory2 onClick={toggleMenu} style = {{width:"5em", height: "auto", color: "#49708A"}} /> 
            </div>
                <MenuLateral isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    );
}

export default Header;
             

            
