import React from 'react';
import HeaderBtn from '../atoms/HeaderBtn';

const NavHeader = () => {
    return (
        <nav className="col-xs-9 header-nav">
            <button className="col-xs-2 header-btn btn-hover1"><a src="#">Курсы</a></button>
            <div className="col-xs-10 nav-other">
                <HeaderBtn text='О проекте' src='#'/>
                <HeaderBtn text='Новости' src='#'/>
                <HeaderBtn text='Уроки' src='#'/>
            </div>
        </nav>
    );
};

export default NavHeader;