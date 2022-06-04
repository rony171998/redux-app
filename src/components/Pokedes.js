import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import {changePokemon} from "../store/slice/pokemon.slice";
import { useDispatch } from "react-redux";

const Characters = () => {
  const user = useSelector((state) => state.user);
  const [pokemon,setPokemon]=useState("");

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setCharacters(res.data.results));
  }, []);

  console.log(characters)
  const getId = () => {
    dispatch(changePokemon(pokemon));
    navigate(`/pokedes/${pokemon}`);
  };
  return (
    <div>
      <h1>Characters</h1>
      <p>Bienvenido {user}!</p>
      <input type="text"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}/>
      <button onClick={getId}>Buscar</button>
      <select>
        <option value="">Todos</option>
        <option value="1">Luchador</option>
        <option value="2">Volador</option>
      </select>
      {
        characters.map((character) => (
        <div key={character.name}>
          <PokemonCard characterUrl={character.url} /> 
        </div>
         
      ))}
    </div>
  );
};

export default Characters;