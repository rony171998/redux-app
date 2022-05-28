import axios from "axios";
import React, { useEffect, useState } from "react";

const CharacterCard = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <div className="card" key={character.id}>
      <div className="card-body">
        <h3>{character.name} - {character.id}</h3>
        
      </div>
    </div>
  );
};

export default CharacterCard;