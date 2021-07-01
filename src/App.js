import React from "react";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/Movies-App/" component={Buscador} />
          <Route path="/Movies-App/favs" component={Favorites} />
          <Route path="/Movies-App/movie/:id" component={MovieDetail} />
      </React.Fragment>
  );
}

export default App;
