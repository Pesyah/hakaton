import React from 'react';
import './MainPage.css'
import MainCarousel from '../organisms/MainCarousel';
import MainBlock from '../organisms/MainBlock';
import Curses from '../organisms/Curses';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

const MainPage = () => {
    return (
        <div className="main-page">
            <section id="main-page">
                <MainBlock/>
                <Curses/>
            </section>
            <Footer cursesHref='' cursesText='Курсы' aboutProjectHref='/' aboutProjectText='О проекте' newsHref='' newsText='Новости'/>
        </div>
    );
};

export default MainPage;