import { BrowserRouter as Router, Route } from "react-router-dom";

import { ListPokemon, PokemonDetail } from "./pages/index";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={ListPokemon} />
      <Route path="/pokemon/:pokemonName" component={PokemonDetail} />
    </Router>
  );
};

export default Routes;
