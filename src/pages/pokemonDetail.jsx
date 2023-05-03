import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDetail.scss";

export const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon({
          ...res.data,
          image: `https://img.pokemondb.net/artwork/${pokemonName}.jpg`,
        });
      });
  });

  if (!pokemon) {
    return null;
  }

  return (
    <div className="PokemonView">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      Abilities
      <ul className="PokemonView__abilities">
        {pokemon.abilities.map((item) => (
          <li>{item.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};
