import React from 'react';
import './MainPage.css'
import MainCarousel from '../organisms/MainCarousel';
import MainBlock from '../organisms/MainBlock';
import Curses from '../organisms/Curses';

const MainPage = () => {
    return (
        <section id="main-page">
            <MainBlock/>
            <Curses/>
        </section>
    );
};

export default MainPage;