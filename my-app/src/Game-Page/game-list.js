// menampilkan halaman movie yang isi nya list gambar, buat didalam component card yang nantinya di map sesuai data
import React, {useContext} from "react"
// import {useParams} from "react-router-dom"
import {GameContext} from "./game-context"
import { Link } from "react-router-dom";

const card = {
  border: "2px solid #fdcb6e",
  display: "inline-block",  
  width: "20%",
  heigh: "20%",
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



const SingleGame = () => {
    // let { id } = useParams();
    const [game, setGame] = useContext(GameContext) 

    console.log(game)
  
    // useEffect( () => {
    //     if(game === null) {
    //     axios.get(`https://backendexample.sanbersy.com/api/data-game`)
    //     .then(res => {
    //         setGame(res.data.map(el=>{ return {
    //           id: el.id, 
    //           name: el.name, 
    //           genre: el.genre,
    //           singlePlayer: el.singlePlayer,
    //           multiplayer: el.multiplayer,
    //           platform: el.platform,
    //           release: el.release,
    //           image_url: el.image_url
    //         }
    //       }))
    //     })
    //   }
    // }, [game])
  
    return(
      <div>
      {game !== null && game.map((el)=>{
        return(
          <div style={card}>
            <div className="img">
              <img style={img} src={el.image_url}/>
               <h5 style={{marginLeft:"4px"}}>Name: {el.name}</h5>
               <h5 style={{marginLeft:"4px"}}>Genre: {el.genre}</h5>
               <h5 style={{marginLeft:"4px"}}>Platform: {el.platform}</h5>
               <Link to={`/game/${el.id}`}>View More</Link>
            </div>
          </div>
        )
      })
      }
      </div>
    )
  
  }
  
  export default SingleGame