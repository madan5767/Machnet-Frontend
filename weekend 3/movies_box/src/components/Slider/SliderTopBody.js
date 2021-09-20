import React, { useState } from "react";
import "./slider-top.css";

const SliderTopBody = (props) => {
  let movieDetails = props.movieDetails;

  const [movies, setMovies] = useState({ prev: 0, next: 1 });
  const handelPrevBtn = () => {
    if (movies.prev > 0) {
      movies.prev -= 1;
      movies.next -= 1;
    }
    setMovies({ ...movies });
  };

  const handelNextBtn = () => {
    if (movies.next < 4) {
      movies.prev += 1;
      movies.next += 1;
    }
    setMovies({ ...movies });
  };
  console.log(movieDetails.slice(movies.prev, movies.next));

  return (
    <>
    <h1>Upcoming Movies</h1>
      {movieDetails
        .slice(movies.prev, movies.next)
        .map((currentMovie, index) => {
          return (
            <section className="carousel" key={index}>
              <img
                className="carousel__img"
                src={currentMovie.large_cover_image}
                alt="Movie Backgrond Image"
              />
              {movies.prev > 0 ? (
                <a className="prev-link" onClick={() => handelPrevBtn()}>
                  &#10094;
                </a>
              ) : (
                ""
              )}
              {movies.next < 4 ? (
                <a className="next-link" oncl onClick={() => handelNextBtn()}>
                  &#10095;
                </a>
              ) : (
                ""
              )}              
            </section>
          );
        })}
    </>
  );
};

export default SliderTopBody;
