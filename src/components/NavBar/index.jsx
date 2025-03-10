import React from 'react';
import './navBar.css'

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className="nav_brand">
                    <a className="nav_link" href="#">ShopWebsite</a>
                </div>
                <ul className='nav_list'>
                    <li>
                        <a className="nav_link" href="#">Inicio</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Productos</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Comprar</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Contacto</a>
                    </li>
                </ul>
            </nav>

        </div>

    )
}

export default NavBar;