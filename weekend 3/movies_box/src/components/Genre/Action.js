import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import './genre.css'
import { useHistory } from 'react-router';

function Action() {
    const [details, setDetails] = useState([]);
    const [key, setkeys] = useState(Object.keys(localStorage));
    const history = useHistory();

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?genre=action')
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
        <h1>Action Movies</h1>
        <div className='first'>            
        { 
            details.map((detail) => {
                const handelWatchListClick = () => {
                    localStorage.setItem("wlist" + detail.id, JSON.stringify(detail));
                    setkeys(Object.keys(localStorage));
                };
                const watchlist = key.includes("wlist" + detail.id);
                const watched = key.includes("watched" + detail.id);
                
                const handelWatchedList = () => {
                    localStorage.setItem("watched" + detail.id, JSON.stringify(detail));
                    if (watchlist == true) {
                        localStorage.removeItem("wlist" + detail.id);
                    }
                    setkeys(Object.keys(localStorage));
                };
                
                return (        
                <div className="item" onDoubleClick={() => movieDetailspage(detail.id)}>                    
                    {(details.length<=0)?
                    <h1>loading</h1>:
                    <>
                    <img src={detail.medium_cover_image} className='movieImage'/>
                    <h3>Movie Name:{detail.title}</h3>
                    <p>&#9734; Rating: {detail.rating}</p>
                    <p>&#9200; Duration:{detail.runtime} Mins.</p>
                    {watchlist === true || watched === true ? (" ") : 
                        (<button onClick={handelWatchListClick}>Watchlist +</button>)
                    } 
                    {watched === false ? (<button onClick={handelWatchedList}>Watched &#10003; </button>) :
                        (<p>Watched &#10003; </p>)
                    }
                    </>
                    }           
                </div>          
                );
            })
        }
        </div>
        </div>
    )
}

export default Action