import React from 'react';
import Logo from '../molecules/Logo.jsx';
import NavHeader from '../molecules/NavHeader.jsx';

const Header = () => {
    return (
        <header id="header">
            <Logo></Logo>
            <NavHeader></NavHeader>
        </header>
    );
};

export default Header;