import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className='bar'>
                    <ul className='flex-container'>
                        <li className='flex-item'>
                            <NavLink to='/'>HOME</NavLink>
                        </li>
                        <li className='flex-item'>
                            <NavLink to='/blog'>BLOG</NavLink>
                        </li>
                        <li className='flex-item'>
                            <NavLink to='/users'>MUSIC</NavLink>
                        </li>
                        <li className='flex-item'>
                            <NavLink to='/users'>MINIATURES</NavLink>
                        </li>
                        <li className='flex-item'>
                            <NavLink to='/portfolio'>DEV PORTFOLIO</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;
