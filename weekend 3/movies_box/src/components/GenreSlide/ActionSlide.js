import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Link} from "react-router-dom"
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import './genreSlide.css';
import { useHistory } from 'react-router';

const ActionSlide = () => {
    const [details, setDetails] = useState([]);
    const [movies, setMovies] = useState({ prev: 0, next: 4 });
    const [key, setkeys] = useState(Object.keys(localStorage));
    const history = useHistory();


    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?genre=action&&limit=10')
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

    // const watchListAdd = (id) => {
    //     localStorage.setItem('id',id);
    //     const data = JSON.stringify(localStorage.getItem('id'))
    //     console.log(data);
    // }

    // const watchListRemove = (id) =>{
    //     localStorage.removeItem('id')
    //     const data = JSON.stringify(localStorage.getItem('id'))
    //     console.log(data);
    // }

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
            <h2>Action</h2>
        
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
                const handelWatchListClick = () => {
                    localStorage.setItem("wlist" + currMovie.id, JSON.stringify(currMovie));
                    setkeys(Object.keys(localStorage));
                };
                const watchlist = key.includes("wlist" + currMovie.id);
                const watched = key.includes("watched" + currMovie.id);
                
                const handelWatchedList = () => {
                    localStorage.setItem("watched" + currMovie.id, JSON.stringify(currMovie));
                    if (watchlist == true) {
                        localStorage.removeItem("wlist" + currMovie.id);
                    }
                    setkeys(Object.keys(localStorage));
                };
            return (
                <div className='main__container' onDoubleClick={() => movieDetailspage(currMovie.id)}>
                    <img src={currMovie.medium_cover_image} alt='movie'  className='image__slider'/>
                    <h4>Movie Name:{currMovie.title}</h4>
                    <p>&#9734; Rating:{currMovie.rating}</p>
                    <p>&#9200; Duration:{currMovie.runtime} Mins.</p>
                    {watchlist === true || watched === true ? (" ") : 
                        (<button onClick={handelWatchListClick}>Watchlist +</button>)
                    } 
                    {watched === false ? (<button onClick={handelWatchedList}>Watched &#10003; </button>) :
                        (<p>Watched &#10003; </p>)
                    }
                </div>
            )})}

            <h6> <Link to='/Action' class="link">See All</Link></h6>        
        </div>
        </section>    
    )
}

export default ActionSlide