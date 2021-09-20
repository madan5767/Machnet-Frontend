import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Link} from "react-router-dom"
import './moviedetails.css';

const MovieDetails = () => {
    const [details, setDetails] = useState([]);
    const [movies, setMovies] = useState({ prev: 0, next: 4 });

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?genre=action&&limit=10')
        .then(response => {
            setDetails(response.data.data.movies);
            
        })
        .catch(error =>{
            alert('error');
        })
    },[])

  
    return (        
        <section className="slider">        
        <div className='slider__main'>
            <h2>Movie Details Page</h2>

            {details.slice(movies.prev, movies.next)    
            .map((currMovie, index) => {
            return (
                <div className='main__container'>
                    <img src={currMovie.medium_cover_image} alt='movie'  className='image__slider'/>
                    <h4>Movie Name:{currMovie.title}</h4>
                    <p>&#9734; Rating:{currMovie.rating}</p>
                    <p>&#9200; Duration:{currMovie.runtime} minutes</p>
                    <button>Add to watch</button>
                </div>
            )})}

            <h6> <Link to='/Action'>See More...</Link></h6>        
        </div>
        </section>    
    )
}

export default MovieDetails