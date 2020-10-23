import React from "react";
import {MovieProvider} from "./movie-context"
import SingleMovie from "./movie-list";
import MovieDetail from "./movie-review";



const Movie = ()=>{
    return(
        <MovieProvider>
            <SingleMovie />
            <MovieDetail />
        </MovieProvider>
    )
}

export default Movie