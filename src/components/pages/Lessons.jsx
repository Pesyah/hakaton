import React from 'react';
import { useDispatch } from 'react-redux';
import Lesson from '../organisms/Lesson';
import './Lessons.css'
import { user, lections} from '../../actions/user';
import { Link } from 'react-router-dom';


const Lessons = () => {
    
    const dispatch = useDispatch()
    dispatch(user(localStorage.getItem('myemail')))
    const openTests = JSON.parse(localStorage.getItem('openTests'))
    dispatch(lections(openTests))
    const lecs = JSON.parse(localStorage.getItem('openLec'))
    return (
        <section id="lessons-block">
            <div className="container">
                <div className="col-xs-12 row">
                { lecs.map((lec) => {
                return(
                    <Link to={`/lec_${lec._id}`}>
                    <Lesson 
                    zag={lec.name}
                    ></Lesson></Link>
                )
            })}
                    {/* <Lesson zag='Урок 1' text={lection} progress='0%'/> */}
                </div>
            </div>
        </section>
    );
};

export default Lessons;