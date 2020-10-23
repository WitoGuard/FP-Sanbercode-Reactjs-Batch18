// menampilkan halaman movie yang isi nya list gambar, buat didalam component card yang nantinya di map sesuai data
import React, { useContext} from "react"
// import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import {MovieContext} from "./movie-context"

const card = {
  border: "2px solid #fdcb6e",
  display: "inline-block",  
  width: "20%",
  margin: "10px",
  "border-radius": "10px",
  "box-shadow": "#aaa"
}

const img={
  width: "100%",
  "object-fit": "cover",
  height: "200px",
  border: "4px solid white",
  "border-top-left-radius": "10px",
  "border-top-right-radius": "10px"
}



const SingleMovie = () => {
    // let { id } = useParams();
    const [movieList, setMovieList] = useContext(MovieContext) 
    
    return(
      <div>
      {movieList !== null && movieList.map((el)=>{
        return(
          <div style={card}>
            <div className="img">
              <img style={img} alt="gambar"src={el.image_url}/>
               <h5 style={{marginLeft:"4px"}}>Title: {el.title}</h5>
               <h5 style={{marginLeft:"4px"}}>Genre: {el.genre}</h5>
               <h5 style={{marginLeft:"4px"}}>Rating: {el.rating}</h5>
               <Link to={`/movie/${el.id}`}>View More</Link>
            </div>
          </div>
        )
      })
    }
    </div>
    )
  
  }
  
  export default SingleMovie