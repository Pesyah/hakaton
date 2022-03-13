import React, {useState} from 'react';
import './Lection.css'

const Lection = (props) => {
    console.log(props.main)
    return (
        <section id="lection">
            <div className="container">
                <div className="row">
                    <h2 className="lection-zag">{props.name}</h2>
                    <p className="lection-text">{props.main}</p>
                    <a href="" className="lection-a">{props.test}</a>
                </div>
            </div>
        </section>
    );
};
export default Lection;