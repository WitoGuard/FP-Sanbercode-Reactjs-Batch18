import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Sider from "./nav";
import Header from "./header"
import Movie from "../Movie-page/movieprovider";
import SingleMovie from "../Movie-page/movie-list"
// import MovieDetail from "../Movie-page/movie-review";
import MovieDetail from "../Movie-page/movie-review"
import SingleGame from "../Game-Page/game-list";
import Game from "../Game-Page/gameprovider";
import GameDetail from "../Game-Page/detail-game";

//ini nanti jadi routes
function Main(){

return(
  <div>
    <Router>
      <Route>
        <Header />
      </Route>
      <Route>
      <Movie />
      </Route>
      <Route>
      <SingleMovie exact path="/"/>
      </Route>
      <Route path="/movie/:id">
      <MovieDetail/>
      </Route>
      <Route>
      <Game />
      </Route>
      <Route path="/game/:id">
      <GameDetail />
      </Route>
      {/* <Route>
      <SingleGame />
      </Route> */}
    {/* <Sider /> */}
    </Router>
  </div>
);
}

export default Main