import React from 'react'
// import axios from 'axios';
import { useState, useEffect } from 'react';
import './watchlist.css'

const WatchList = () => {
    const [data, setData] = useState(Object.values(localStorage));
    const [key, setkeys] = useState(Object.keys(localStorage));
    // console.log(data);

    useEffect(() => {
        if (data.length>0) {
            // console.log(data);
        }        
        setData(Object.values(localStorage));
        setkeys(Object.keys(localStorage));
    }, [key])
      
    return (
        <div className='watchlist'>
            <h1>WatchList</h1>  
            {data.map((item) => {
                const parsedData = JSON.parse(item);
                const isWatchlisted=key.includes("wlist"+parsedData.id);
                
                const watchListRemove = (id) =>{
                    localStorage.removeItem("wlist" + parsedData.id);
                    console.log(id);
                }
                // console.log(parsedData.id);
                // console.log(isWatchlisted);
                return (           
                    <div className="watchlist-item" >
                        <img src={parsedData.medium_cover_image} className="movieImage" />                        
                        <div className="watchlist-item-details">            
                            <h3>Movie Name:{parsedData.title}</h3>
                            <p>&#9734; Rating:{parsedData.rating}</p>
                            <p>&#9200; Duration:{parsedData.runtime} Mins.</p>
                            <button onClick={() => watchListRemove(parsedData.id)}>Remove</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )    
}

export default WatchList
