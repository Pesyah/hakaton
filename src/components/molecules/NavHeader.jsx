import React from 'react';
import HeaderBtn from '../atoms/HeaderBtn';

const NavHeader = () => {
    return (
        <nav className="col-xs-8 header-nav">
            <HeaderBtn text='Уроки' src='#'/>
            <HeaderBtn text='Уроки' src='#'/>
            <HeaderBtn text='Уроки' src='#'/>
            <HeaderBtn text='Уроки' src='#'/>
        </nav>
    );
};

export default NavHeader;