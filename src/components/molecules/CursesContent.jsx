import React from 'react';
import MainCarousel from '../organisms/MainCarousel';

const CursesContent = (props) => {
    return (
        <div className="col-xs-12 curses-content">
            <div className="col-xs-4 curses-text-content">
                <p>{props.text}</p>
            </div>
            <div className="col-xs-8">
                <MainCarousel/>
            </div>
        </div>
    );
};

export default CursesContent;