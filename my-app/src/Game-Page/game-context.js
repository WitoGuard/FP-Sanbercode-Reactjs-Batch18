import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import SingleGame from "./game-list";

export const GameContext = createContext();

export const GameProvider = props => {
    const [game, setGame] = useState(null)

    useEffect( () => {
        if(game === null) {
        axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        .then(res => {
            setGame(res.data.map(el=>{ return {
              id: el.id, 
              name: el.name, 
              genre: el.genre,
              singlePlayer: el.singlePlayer,
              multiplayer: el.multiplayer,
              platform: el.platform,
              release: el.release,
              image_url: el.image_url
            }
          }))
        })
      }
    }, [game])

    return(
        // game !== null && game.map((el)=>{
        //   return(
            <GameContext.Provider value={[game, setGame]}>
                {props.children}
            </GameContext.Provider>
        //   )
        // })
      )
}





// const SingleGame = () => {
//     // let { id } = useParams();
//     const [game, setGame] = useState(null) 
  
//     useEffect( () => {
//         if(game === null) {
//         axios.get(`https://backendexample.sanbersy.com/api/data-game`)
//         .then(res => {
//             setGame(res.data.map(el=>{ return {
//               id: el.id, 
//               name: el.name, 
//               genre: el.genre,
//               singlePlayer: el.singlePlayer,
//               multiplayer: el.multiplayer,
//               platform: el.platform,
//               release: el.release,
//               image_url: el.image_url
//             }
//           }))
//         })
//       }
//     }, [game])
  
//     return(
//       game !== null && game.map((el)=>{
//         return(
//           <div style={card}>
//             <div className="img">
//               <img style={img} src={el.image_url}/>
//                <h5 style={{marginLeft:"4px"}}>Name: {el.name}</h5>
//                <h5 style={{marginLeft:"4px"}}>Genre: {el.genre}</h5>
//                <h5 style={{marginLeft:"4px"}}>Platform: {el.platform}</h5>
//             </div>
//           </div>
//         )
//       })
//     )
  
//   }