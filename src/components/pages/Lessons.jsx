import React from 'react';
import Lesson from '../organisms/Lesson';
import './Lessons.css'

const Lessons = () => {
    return (
        <section id="lessons-block">
            <div className="container">
                <div className="col-xs-12 row">
                    <Lesson zag='Урок 1' text='Текст блока' progress='0%'/>
                </div>
            </div>
        </section>
    );
};

export default Lessons;