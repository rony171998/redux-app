import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePokemon } from "../store/slice/pokemon.slice";


const CharacterDetail = () => {

  const pokemon = useSelector((state) => state.pokemon);

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => setCharacters(res.data));
  }, [pokemon]);

  const getId = () => {
    dispatch(changePokemon(pokemon+1));
    navigate(`/pokedes/${pokemon+1}`);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => setCharacters(res.data));
  };
  const back = () => {
    navigate(`/pokedes`);
    
  };

  //console.log(characters.sprites?.other);

  return (
    <div className="cards-container">
      <div className="grid-father_container">
        <div className="pokeCard">
          <div className="card-image_container card-image_pokemon"> 
            <img src={characters.sprites?.other.dream_world.front_default} alt="Pokemon" />
            <button onClick={back}>volver</button>
            <button onClick={getId}>Next Pokemon</button>  
          </div>

          <div className="card-pokemon_name">{characters.name} - {characters.id} </div>
          <div className="card-pokemon_weight">weight: {characters.weight}</div>
          <div className="card-pokemon_height">height: {characters.height}</div>
          <div className="card-pokemon_height">base_experience: {characters.base_experience}</div>
          

          <div className="card-stats card-container_stats clearfix">
            {
              characters.types?.map(character => (
                <div className="card_pokemon_type card_container_color" key={character.type.name}>
                  tipo {character.type.name}
                </div>
              ))
            }
          </div>

          {
            characters.stats?.map(characters => (
              <div className="card-stat" key={characters.stat.name}>
                <div className="value">stat: {characters.base_stat}</div>
                <div className="stat-value">{characters.stat.name}</div>
              </div>
            ))
          }

          {
            characters.abilities?.map(characters => (
              <div className="card-stat" key={characters.ability.name}>
                <div className="value">ability: {characters.ability.name}</div>
              </div>
            ))
          }

{
            characters.moves?.map(characters => (
              <div className="card-stat" key={characters.move.name}>
                <div className="value">move: {characters.move.name}</div>
              </div>
            ))
          }
         
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;