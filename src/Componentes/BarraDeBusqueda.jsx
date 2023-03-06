import React from 'react';

const BarraDeBusqueda = () => {
    return (
        <div>
            <form className="d-flex mx-auto pt-2 w-75 " role="search">
                <input className='form-control rounded-pill  '
                        type="search" 
                        placeholder="Buscar" 
                        aria-label="Search">
                </input>
            </form>
        </div>
    );
}

export default BarraDeBusqueda;


