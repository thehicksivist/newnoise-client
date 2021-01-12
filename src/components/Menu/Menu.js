import React from 'react';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open}>
            <li onClick={() => setOpen(!open)}>
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li onClick={() => setOpen(!open)}>
                <NavLink to='/about'>ABOUT</NavLink>
            </li>
            <li onClick={() => setOpen(!open)}>
                <NavLink to='/music'>MUSIC</NavLink>
            </li>
            <li onClick={() => setOpen(!open)}>
                <NavLink to='/miniatures'>MINIATURES</NavLink>
            </li>
            <li onClick={() => setOpen(!open)}>
                <NavLink to='/contact'>CONTACT</NavLink>
            </li>
        </StyledMenu>
    );
};
export default Menu;
