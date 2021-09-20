import React from 'react'
import {useUpcomingMovies} from '../services/UseUpcomingMovies'
import SliderTopBody from './SliderTopBody';

const SliderTop = () => {
    const {loading,movieDetails, error } =  useUpcomingMovies();
    console.log(movieDetails)

    const renderSLiderTop=()=>{
        if(loading){
            return <div className="loading">Loading...</div>;
        }
        if(error){
            return <div className="error">{error}</div>;
        }

        return <SliderTopBody movieDetails={movieDetails}/>
    }
    return (
        <div>
            { renderSLiderTop()}
        </div>
    )
}

export default SliderTop;