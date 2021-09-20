import React from 'react'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import SliderTop from '../Slider/SliderTop'
import ActionSlide from '../GenreSlide/ActionSlide';
import CrimeSlide from '../GenreSlide/CrimeSlide';
import DramaSlide from '../GenreSlide/DramaSlide';
import ThrillerSlide from '../GenreSlide/ThrillerSlide';

export const Home = () => {
    return (
        <div>
            <SliderTop/>
            <ActionSlide/>
            <CrimeSlide/>
            <DramaSlide/>
            <ThrillerSlide/>
        </div>
    )
}
