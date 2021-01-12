import React from 'react';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open}>
            <NavLink to='/' onClick={() => setOpen(open)}>
                HOME
            </NavLink>
            <NavLink to='/about' onClick={() => setOpen(open)}>
                ABOUT
            </NavLink>
            <NavLink to='/music' onClick={() => setOpen(open)}>
                MUSIC
            </NavLink>
            <NavLink to='/miniatures' onClick={() => setOpen(open)}>
                MINIATURES
            </NavLink>
            <NavLink to='/contact' onClick={() => setOpen(open)}>
                CONTACT
            </NavLink>
        </StyledMenu>
    );
};
export default Menu;
