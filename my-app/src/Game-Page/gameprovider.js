import React from "react";
import {GameProvider} from "./game-context"
import SingleGame from "./game-list";
import GameDetail from "./detail-game";


const Game = ()=>{
    return(
        <GameProvider>
            <SingleGame />
            <GameDetail />
        </GameProvider>
    )
}

export default Game