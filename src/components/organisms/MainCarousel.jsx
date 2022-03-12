import React from 'react';
import { Carousel } from 'react-bootstrap';
import MainCarouselBlock from '../molecules/MainCarouselBlock';
import Carousel1 from './slider/carousel1.png'
import Carousel2 from './slider/carousel2.png'
import Carousel3 from './slider/carousel3.png'

const MainCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Carousel1} alt="First slide"/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Carousel2} alt="Second slide"/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Carousel3}/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    );
};

export default MainCarousel;