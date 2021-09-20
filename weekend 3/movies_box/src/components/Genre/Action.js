import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import './genre.css'

function Action() {
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?genre=action')
        .then(response => {
            setDetails(response.data.data.movies);            
        })
        .catch(error =>{
            alert('error');
        })
    },[])

    console.log(details)
    return (
        <div className='first'>            
        { 
            details.map((detail) => {
                return (        
                <div className="item">                    
                    {(details.length<=0)?
                    <h1>loading</h1>:
                    <>
                    <img src={detail.medium_cover_image} className='movieImage'/>
                    <h3>Movie Name:{detail.title}</h3>
                    <p>&#9734; Rating: {detail.rating}</p>
                    <p>&#9200; Duration:{detail.runtime} Mins.</p>
                    <button>Watchlist +</button>
                    <button>Watched &#10003; </button>
                    </>
                    }           
                </div>          
                );
            })
        }
        </div>
    )
}

export default Action