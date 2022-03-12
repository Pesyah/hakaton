import React from 'react';
import { Carousel } from 'react-bootstrap';
import MainCarouselBlock from '../molecules/MainCarouselBlock';

const MainCarousel = () => {
    return (
        <div className="main-carousel">
            <Carousel>
                <MainCarouselBlock/>
                <MainCarouselBlock/>
                <MainCarouselBlock/>
            </Carousel>
        </div>
    );
};

export default MainCarousel;