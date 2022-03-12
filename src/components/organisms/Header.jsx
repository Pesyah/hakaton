import React from 'react';
import './Header.css'
import Logo from '../molecules/Logo.jsx';
import NavHeader from '../molecules/NavHeader.jsx';
import Account from '../molecules/Account';

const Header = () => {
    return (
        <header className="col-xs-12" id="header">
            <Logo/>
            <NavHeader>
            </NavHeader>
            <Account>
            </Account>
        </header>
    );
};

export default Header;