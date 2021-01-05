import React, { Component } from 'react';
import '../styles/nav.css';
import headerimg from '../img/header.jpg';
import logo from '../img/logo_inline_black.png';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className='imgcont'>
                <img className='face' src={headerimg} />
                <img className='logo' src={logo} />
            </div>
        );
    }
}
export default Header;
