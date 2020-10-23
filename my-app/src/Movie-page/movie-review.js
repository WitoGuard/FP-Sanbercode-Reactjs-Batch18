import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import {MovieContext} from "./movie-context"


const MovieDetail = () => {
    let {id} = useParams()
    const [movieList, setMovieList] = useContext(MovieContext) 
  
    // useEffect( () => {
    //     if(daftarFilm === null) {
    //     axios.get(`https://www.backendexample.sanbersy.com/api/movies/`)
    //     .then(res => {
    //         setDaftarFilm(res.data.map(el=>{ return {
    //           id: el.id, 
    //           title: el.title, 
    //           description: el.description,
    //           year: el.year,
    //           duration: el.duration,
    //           genre: el.genre,
    //           rating: el.rating,
    //           image_url: el.image_url,
    //           review: el.review
    //         }
    //       }))
    //     })
    //   }
    // }, [daftarFilm])
    
    return(
      <div>
        {
        movieList !== null && movieList.filter((data)=>{
            return(
                data.id
            ) === id
        }).map((el,index)=>{
            return(
                <h1 key={index}>{el.title}</h1>
            )
        })
        // daftarFilm !== null && daftarFilm.filter((data)=> data.id === id).map((el,index)=>{
        // return (
        //     <div key={index} style={{width: "800px", height:"600px", border: "3px solid gray", marginBottom: "10px", borderRadius:"8px", marginRight:"400px", marginLeft: "400px"}}>
        //      <div>
        //          <h2 style={{marginLeft:"4px"}}>Title: {el.title}</h2>
        //          <img style={{width: "790px", height: "400px", borderRadius:"10px", marginLeft:"2px"}} src={el.image_url}/>               
        //          <h4 style={{marginLeft:"4px"}}>Genre: {el.genre}</h4>
        //          <h4 style={{marginLeft:"4px"}}>Rating: {el.rating}</h4>
        //          <h4 style={{marginLeft:"4px"}}>Year: {el.year}</h4>
        //          <h4 style={{marginLeft:"4px"}}>Review: {el.review}</h4>
        //      </div>
        //    </div>
        // )})
      }
      </div>  
    )
  }
  
  export default MovieDetail