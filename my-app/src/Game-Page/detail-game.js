import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import {GameContext} from "./game-context"



const GameDetail = () => {
    let {id} = useParams()
    const [game, setGame] = useContext(GameContext)
    
    return(
        <div>
        {
        game !== null && game.filter((data)=> data.id === id).map((el,index)=>(
            <h1>{el.title}</h1>
        ))

        // game !== null && game.map((el)=>{
        //    return(
        //         <h1>{el.title}</h1>
        //     )
        // }) 
        


    //     // game !== null && game.filter((data)=>{
    //     //     return(
    //     //         data.id
    //     //     ) === id
    //     // }).map((el,index)=>{
    //     //     return(
    //     //         <h1 key={index}>{el.title}</h1>
    //     //     )
    //     // })
        }
        </div>       
    )
  }
  
  export default GameDetail