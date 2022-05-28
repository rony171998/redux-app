import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePokemon } from "../store/slice/pokemon.slice";

const CharacterCard = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, []);

  //console.log(character);

  const getId = () => {
    dispatch(changePokemon(character.id));
    navigate(`/characters/${character.id}`);
  };

  return (
    <div className="card" key={character.id}>
      <div className="card-body">
        <p onClick={getId}>{character.name} - {character.id} </p>
        <button onClick={getId}>{character.name}</button>
      </div>
    </div>
  );
};

export default CharacterCard;