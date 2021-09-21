import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Link} from "react-router-dom"
import './moviedetails.css';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';

const MovieDetails = () => {
    const [Moviedetail, setMovieDetail] = useState([]); 
    const [SuggestedMovies, setSuggestedMovies] = useState([]);
    const location = useLocation();
    const movie_id = location.state;
    const movieapi = `https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`;
    const suggestionapi = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movie_id}`;
    const history = useHistory();

    const fetchMovieDetails = () => {
        axios
        .get(movieapi)
        .then((res) => {
            setMovieDetail(res.data.data);
            console.log(Moviedetail);
        })
        .catch((error) => {
        console.log(error);
        });
    }

    const fetchSuggestedMovies = () => {
        axios
        .get(suggestionapi)
        .then((res) => {
            setSuggestedMovies(res.data.data.movies);
            console.log(SuggestedMovies)
        })
        .catch((error) => {
            console.log(error);
      });
    }

    const movieDetailspage = (id) => {
        history.push({pathname: '/MovieDetails', state: id });
        // console.log(id);
    }

    useEffect( () =>{
        fetchMovieDetails();
        fetchSuggestedMovies();
    },[]) 

    return (        
        <div className="movie">
            <div className="movie-details">
                {Moviedetail.movie !== undefined && (
                    <section className="movie__wrapper">
                        <div className="movie-top-wrapper">
                            <div className="image__movie"
                                style={{backgroundImage: `url(${Moviedetail.movie.medium_cover_image})`}}>
                            </div> 
                            <iframe
                                src={`https://www.youtube.com/embed/${Moviedetail.movie.yt_trailer_code}`} frameborder="0" className="trailer__movie">
                            </iframe>                            
                        </div>
                    
                    <article className="context__movie">                                    
                    <div className="info__movie">
                        <h2 className="title__movie">{Moviedetail.movie.title}</h2>
                        <p className="rating__movie"> &#9734; Rating : {Moviedetail.movie.rating}</p>
                        <ul className="gener__movie">
                            Genre:{" "}
                            {Moviedetail.movie.genres.map((genre) => {
                                return <li className="list__genre">{genre}</li>;
                            })}
                        </ul>
                        <p className="duration__movie">
                        Duration: {Moviedetail.movie.runtime} Mins.
                        </p>
                        <button>Watchlist +</button>
                        <button>Watched &#10003; </button>
                        <p className="desc__movie">
                        Descripiton: {Moviedetail.movie.description_full}
                        </p>
                        <ul className="links__movie">
                        Torrent Links:{" "}
                        {Moviedetail.movie.torrents.map((torren) => {
                            return (
                            <div>
                                <a href={torren.url} className="url__links">
                                {torren.url}
                                </a>
                                <div className="info__links">
                                    <p>Quality: {torren.quality}</p>
                                    <p>Size: {torren.size}</p>
                                </div>
                            </div>
                            );
                        })}
                        </ul>                        
                    </div>
                    </article>
                    </section>
                )}
            </div>

            <div className="movie-suggest">
                <h1>You May Also Like</h1>
                <div className="movie-suggest-main">
                    {SuggestedMovies.map((suggested) => {
                        return (
                            <div className="movie-suggest-item" onDoubleClick={() => movieDetailspage(suggested.id)}>
                                <img src={suggested.medium_cover_image} className="image__slider_suggested"/>
                                <h3>Movie Name:{suggested.title}</h3>
                                <p>&#9734; Rating:{suggested.rating}</p>
                                <p>&#9200; Duration:{suggested.runtime} Mins.</p>
                                <button>Watchlist +</button>
                                <button>Watched &#10003; </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div> 
    )
}

export default MovieDetails