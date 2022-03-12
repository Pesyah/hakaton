import React from 'react';
import { Carousel } from 'react-bootstrap';
import MainCarouselContent from '../atoms/MainCarouselContent';


const MainCarouselBlock = (props) => {
    return (
        <Carousel.Item>
            <img className="d-block w-100" src={props.src} alt="slide"/>
            <Carousel.Caption>
                <h3>{props.zag}</h3>
                <p>{props.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
        
    );
};

export default MainCarouselBlock;
