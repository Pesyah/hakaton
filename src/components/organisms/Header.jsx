import React from 'react';
import Logo from '../molecules/Logo';
import NavHeader from '../molecules/NavHeader';

const Header = () => {
    return (
        <header id="header">
            <Logo></Logo>
            <NavHeader></NavHeader>
        </header>
    );
};

export default Header;