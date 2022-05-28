import axios from "axios";
import React, { useEffect, useState } from "react";

const CharacterCard = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <div className="cards-container">
    <div className="grid-father_container">
    <div className="pokeCard">
              <div className="card-image_container card-image_pokemon">
                  <img src="https://www.pngarts.com/files/3/Bulbasaur-Transparent-Image.png" alt="Pokemon
                " />
              </div>
              
              <div className="card-pokemon_name">{character.name}</div>
              <div className="card_pokemon_type card_container_color">{character.type} / {character.species}</div>
              <div className="card-pokemon_description">
                  {character.description}
              </div>

              <div className="card-stats card-container_stats clearfix">
                  <div className="card-stat">
                      <div className="value">59</div>
                      <div className="stat-value">HP</div>
                  </div>

                  <div className="card-stat">
                      <div className="value">45</div>
                      <div className="stat-value">Velocidad</div>
                  </div>

                  <div className="card-stat no-border">
                      <div className="value">49</div>
                      <div className="stat-value">Defensa</div>
                  </div>

                  <div className="card-stat grid-4 no-border">
                      <div className="value">20</div>
                      <div className="stat-value">Ataque</div>
                  </div>

              </div>

          </div>
    </div>
  </div>
  );
};

export default CharacterCard;