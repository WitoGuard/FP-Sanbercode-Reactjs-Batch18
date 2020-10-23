import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movieList, setMovieList] = useState(null);
  
  useEffect( () => {
    if(movieList === null) {
    axios.get(`https://www.backendexample.sanbersy.com/api/movies`)
    .then(res => {
        setMovieList(res.data.map(el=>{ return {
          id: el.id, 
          title: el.title, 
          description: el.description,
          year: el.year,
          duration: el.duration,
          genre: el.genre,
          rating: el.rating,
          image_url: el.image_url
        }
      }))
    })
  }
}, [movieList])

  return (
    <MovieContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </MovieContext.Provider>
  );
};