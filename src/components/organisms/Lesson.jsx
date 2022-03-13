import React from 'react';

const Lesson = (props) => {
    return (
        <div className="col-xs-6 lesson-bl">
            <div className="lesson-text-bl">
                <h2 className="lesson-zag">{props.zag}</h2><br/>
                <p className="lesson-p">{props.text}</p>
            </div>
            <div className="progress-bl">
                <h2 className="progress-text">Прогресс: {props.progress}</h2>
                <div className="progress"></div>
            </div>
        </div>
    );
};

export default Lesson;