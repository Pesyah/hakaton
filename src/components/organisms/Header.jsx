import React from 'react';
import './Header.css'
import Logo from '../molecules/Logo.jsx';
import NavHeader from '../molecules/NavHeader.jsx';
import Account from '../molecules/Account';

const Header = () => {
    return (
        <header id="header">
            <Logo/>
            <NavHeader/>
            <Account text='Войти' src='#'/>
        </header>
    );
};

export default Header;