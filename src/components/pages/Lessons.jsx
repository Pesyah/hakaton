import React from 'react';
import { useDispatch } from 'react-redux';
import Lesson from '../organisms/Lesson';
import './Lessons.css'
import { user } from '../../actions/user';

const Lessons = () => {
    const dispatch = useDispatch()
    const myuser = dispatch(user())
    console.log(myuser)
    return (
        <section id="lessons-block">
            <div className="container">
                <div className="col-xs-12 row">
                    <Lesson zag='Урок 1' text='Текст блока' progress='0%'/>
                    <Lesson zag='Урок 1' text='Текст блока' progress='0%'/>
                    <Lesson zag='Урок 1' text='Текст блока' progress='0%'/>
                    <Lesson zag='Урок 1' text='Текст блока' progress='0%'/>


                </div>
            </div>
        </section>
    );
};

export default Lessons;