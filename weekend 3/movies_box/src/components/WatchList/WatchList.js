import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import './watchlist.css'

const WatchList = () => {
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        // axios.get('https://yts.mx/api/v2/list_movies.json?genre=crime')
        // .then(response => {
        //     setDetails(response.data.data.movies);
            
        // })
        // .catch(error =>{
        //     alert('error');
        // })
    },[]);
    
    console.log(details)
    return (
        <div className='first'>
        { 
            details.map((detail) => {
                return (
                <div className="item">
                    <img src={detail.medium_cover_image} className='movieImage'/>
                    <h3>Movie Name:{detail.title}</h3>
                    <p>&#9734; Rating:{detail.rating}</p>
                    <p>&#9200; Duration:{detail.runtime} minutes</p>
                    <button>Add to watch</button>            
                </div>
                );
            })
        }
        </div>
    )
}

export default WatchList