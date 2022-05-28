import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const user = useSelector((state) => state.user);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setCharacters(res.data.results));
  }, []);

  console.log(characters);

  return (
    <div>
      <h1>Characters</h1>
      <p>Bienvenido {user}!</p>
      {characters.map((character) => (
        <CharacterCard characterUrl={character.url} />
        
      ))}
    </div>
  );
};

export default Characters;