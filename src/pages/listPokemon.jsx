import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useListPokemonSeen } from "../context/newPokemons";
import "./listPokemon.scss";

export const ListPokemon = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const { listPokemonSeen, setListPokemonSeen } = useListPokemonSeen();

  React.useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        res.data.results.map((pokemon) => {
          return setPokemons((pokemons) => [
            ...pokemons,
            {
              ...pokemon,
              image: `https://img.pokemondb.net/artwork/${pokemon?.name}.jpg`,
              isNew: listPokemonSeen.indexOf(pokemon?.name) === -1,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const history = useHistory();
  const handlePokemon = (pokemon) => {
    console.log(pokemon);
    setListPokemonSeen([...listPokemonSeen, pokemon.name]);
    history.push(`/pokemon/${pokemon.name}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Pokedex</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="listagem">
            {pokemons.map((pokemon) => (
              <li
                onClick={() => handlePokemon(pokemon)}
                className="pokemon"
                key={pokemon.id}
              >
                <img src={pokemon.image} alt={pokemon.name} />
                <span className={`tag`}>{pokemon.isNew ? "Novo" : null}</span>
                <span className="name">{pokemon.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
