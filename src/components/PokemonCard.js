import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePokemon } from "../store/slice/pokemon.slice";
import './styles/PokemonCard.css';
import backgrounds from './styles/backgrounds.json';


const CharacterCard = ({ characterUrl }) => {

  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, [characterUrl]);

  const getId = () => {
    dispatch(changePokemon(character.id));
    navigate(`/pokedes/${character.id}`);
  };

  const changeColor = () => {
    let bg = backgrounds.filter(e => {
      return e.type === character.types?.[0].type.name
    })
    return bg[0]?.background
  }

  const changeColorStats = () => {
    let bg = backgrounds.filter(e => {
      return e.type === character.types?.[0].type.name
    })
    return bg[0]?.border
  }

  const getPokemon = {

    image: character.sprites?.other.dream_world.front_default,
    name: character.name,
  
    speed: character.stats?.[0].base_stat,
    hp: character.stats?.[1].base_stat,
    attack: character.stats?.[2].base_stat,
    defense: character.stats?.[3].base_stat,
    specialAttack: character.stats?.[4].base_stat,
    weight: character.weight,
    height: character.height,
    experience: character.base_experience,

}

  return (
    <div className="pokeCard" onClick={getId}>
            <div className="card-image_container card-image_pokemon"  style={{backgroundImage:changeColor()}}>
                <img src={getPokemon.image} alt="pokemon" />
            </div>

            <div className="card-pokemon_name">
                {getPokemon.name}
            </div>
            <div className="card_pokemon_type card_container_color"> / </div>
            <div className="card-stats card-container_stats clearfix" style={{backgroundColor:changeColorStats()}}>
                <div className="card-stat">
                    <div className="value">{getPokemon.hp}</div>
                    <div className="stat-value">HP</div>
                </div>

                <div className="card-stat">
                    <div className="value">{getPokemon.speed}</div>
                    <div className="stat-value">Velocidad</div>
                </div>

                <div className="card-stat no-border">
                    <div className="value">{getPokemon.defense}</div>
                    <div className="stat-value">Defensa</div>
                </div>

                <div className="card-stat grid-4 no-border">
                    <div className="value">{getPokemon.attack}</div>
                    <div className="stat-value">Ataque</div>
                </div>

            </div>

        </div>
    /*
    <div className="card" key={getPokemon.id}>
      <div className="card-body">
        { <p onClick={getId}>{getPokemon.name} - {getPokemon.id} </p> }
        <button onClick={getId}>{getPokemon.name}</button>
      </div>
    </div>
    */
    
  );
};

export default CharacterCard;