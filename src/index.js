import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes.js";
import ListPokemonSeenProvider from "./context/newPokemons";

ReactDOM.render(
  <React.StrictMode>
    <ListPokemonSeenProvider>
      <Routes />
    </ListPokemonSeenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
