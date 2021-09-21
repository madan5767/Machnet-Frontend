import React from 'react'
import './genre.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const Thriller = () => {
    const [details, setDetails] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?genre=thriller')
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
    
    console.log(details)
    return (
        <div className="genre-title">
        <h1>Thriller Movies</h1>
        <div className='first'>
        { 
            details.map((detail) => {
                return (
                <div className="item" onDoubleClick={() => movieDetailspage(detail.id)}>
                    <img src={detail.medium_cover_image} className='movieImage'/>
                    <h3>Movie Name:{detail.title}</h3>
                    <p>&#9734; Rating:{detail.rating}</p>
                    <p>&#9200; Duration:{detail.runtime} Mins.</p>
                    <button>Watchlist +</button>
                    <button>Watched &#10003; </button>           
                </div>
                );
            })
        }
        </div>
        </div>
    )
}

export default Thriller