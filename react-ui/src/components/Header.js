import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className='imgcont'>
                <div className='shadow'></div>
                <img
                    className='face fade-in'
                    src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1610691528/header.jpg'
                    alt='face'
                />
                <div className='text'>
                    <div className='title'>
                        <p className='titletext'>
                            {' '}
                            undoing perfectionism &nbsp;
                        </p>
                    </div>
                    <p className='subtitle'>by James Hicks</p>
                </div>
            </div>
        );
    }
}
export default Header;
