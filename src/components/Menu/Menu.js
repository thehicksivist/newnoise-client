import React from 'react';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open}>
            <ul>
                <li>
                    <NavLink to='/' onClick={() => setOpen(!open)}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' onClick={() => setOpen(!open)}>
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/music' onClick={() => setOpen(!open)}>
                        MUSIC
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/miniatures' onClick={() => setOpen(!open)}>
                        MINIATURES
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' onClick={() => setOpen(!open)}>
                        PORTFOLIO
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' onClick={() => setOpen(!open)}>
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </StyledMenu>
    );
};
export default Menu;
