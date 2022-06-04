import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const CharacterDetail = () => {

  const pokemon = useSelector((state) => state.pokemon);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => setCharacters(res.data));
  }, [pokemon]);

  //console.log(pokemon);

  return (
    <div className="cards-container">
      <div className="grid-father_container">
        <div className="pokeCard">
          <div className="card-image_container card-image_pokemon">
            {/* <img src="https://www.pngarts.com/files/3/Bulbasaur-Transparent-Image.png" alt="Pokemon" /> */}
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