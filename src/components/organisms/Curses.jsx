import React from 'react';
import CursesContent from '../molecules/CursesContent';

const Curses = () => {
    return (
        <div className="container">
            <div className="row">
                <section id="curses">
                    <h2 className="curses-zag">Курсы</h2>
                    <CursesContent text='Здесь представлены курсы нашей компании. В современном мире очень важно постоянно учиться. Мы обучим вас востребованным профессиям, разовьём ваши hard-skills в области.'/>
                </section>
            </div>
        </div>
    );
};

export default Curses;