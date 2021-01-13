import React, { Component } from 'react';
import headerimg from '../img/header.jpg';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className='imgcont'>
                <div className='shadow'></div>
                <img className='face fade-in' src={headerimg} />
                <div className='text'>
                    <div className='title'>
                        <p className='titletext'> undoing perfectionism</p>
                    </div>
                    <p className='subtitle'>by James Hicks</p>
                </div>
            </div>
        );
    }
}
export default Header;
