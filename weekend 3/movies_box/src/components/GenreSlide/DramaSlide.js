import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter, Link} from "react-router-dom"
import './genreSlide.css';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useHistory } from 'react-router';

const DramaSlide = () => {
    const [details, setDetails] = useState([]);
    const [movies, setMovies] = useState({ prev: 0, next: 4 });
    const history = useHistory();

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?genre=drama&&limit=10')
        .then(response => {
            setDetails(response.data.data.movies);
            
        })
        .catch(error =>{
            alert('error');
        })
    },[])

    const movieDetailspage = (id) => {
      history.push({pathname: '/MovieDetails', state: id });
      // console.log(id);
  }

    const handelPrevBtn = () => {
        if (movies.prev > 0) {
          movies.prev -= 1;
          movies.next -= 1;
        }
        setMovies({ ...movies });
      };
    
      const handelNextBtn = () => {
        if (movies.next < 10) {
          movies.prev += 1;
          movies.next += 1;
        }
        setMovies({ ...movies });
      };    
   
    return (        
        <section className="slider">        
        <div className='slider__main'>
            <h2>Drama</h2>        
            {movies.prev > 0 ? (
        <FaRegArrowAltCircleLeft className='left-arrow__slider' onClick={() => handelPrevBtn()}/>) : (
            ""
          )}
        {movies.next < 10 ? (
        <FaRegArrowAltCircleRight className='right-arrow__slider' onClick={() => handelNextBtn()} />) : (
            ""
          )}
        {details.slice(movies.prev, movies.next)
    
        .map((currMovie, index) => {
            return (
                <div className='main__container' onClick={() => movieDetailspage(currMovie.id)}>
                    <img src={currMovie.medium_cover_image} alt='movie'  className='image__slider'/>
                    <h4>Movie Name:{currMovie.title}</h4>
                    <p>&#9734; Rating:{currMovie.rating}</p>
                    <p>&#9200; Duration:{currMovie.runtime} Mins.</p>
                    <button>Watchlist +</button>
                    <button>Watched &#10003; </button>
              </div>
            )})}
            <h6> <Link to='/Drama' class="link">See All</Link></h6>       
        </div>
        </section>    
    )
}

export default DramaSlide