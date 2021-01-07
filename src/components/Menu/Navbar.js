import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

const Navbar = () => {
    return (
        <div className='bar'>
            <ul className='flex-container'>
                <li className='flex-item'>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li className='flex-item'>
                    <NavLink to='/about'>ABOUT</NavLink>
                </li>
                <li className='flex-item'>
                    <NavLink to='/music'>MUSIC</NavLink>
                </li>
                <li className='flex-item'>
                    <NavLink to='/miniatures'>MINIATURES</NavLink>
                </li>
                <li className='flex-item'>
                    <NavLink to='/portfolio'>PORTFOLIO</NavLink>
                </li>
                <li className='flex-item'>
                    <NavLink to='/'>CONTACT</NavLink>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;
