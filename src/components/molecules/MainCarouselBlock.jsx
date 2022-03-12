import React from 'react';
import { Carousel } from 'react-bootstrap';
import MainCarouselContent from '../atoms/MainCarouselContent';


const MainCarouselBlock = (props) => {
    return (
        <Carousel.Item>
            <img className="d-block w-100" src={props.src} alt="slide"/>
        </Carousel.Item>
    );
};

export default MainCarouselBlock;
