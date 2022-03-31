import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDetail.scss";
import axios from "axios";
import { useListPokemonSeen } from "../context/newPokemons";

export const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();
  const { listPokemonSeen, setListPokemonSeen } = useListPokemonSeen();

  useEffect(() => {
    console.log(listPokemonSeen);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon({
          ...res.data,
          image: `https://img.pokemondb.net/artwork/${pokemonName}.jpg`,
        });
      });
  }, [pokemonName]);

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
