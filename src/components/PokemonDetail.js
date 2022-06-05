import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './styles/PokemonDetails.css';
import backgrounds from './styles/backgrounds.json';


const CharacterDetail = () => {

  const pokemon = useSelector((state) => state.pokemon);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => setCharacters(res.data));
  }, [pokemon]);

  const getPokemon = {

    image: characters.sprites?.other.dream_world.front_default,
    name: characters.name,
    ability: characters.abilities?.[0].ability.name,
    ability1: characters.abilities?.[1].ability.name,
    speed: characters.stats?.[0].base_stat,
    hp: characters.stats?.[1].base_stat,
    attack: characters.stats?.[2].base_stat,
    defense: characters.stats?.[3].base_stat,
    specialAttack: characters.stats?.[4].base_stat,
    weight: characters.weight,
    height: characters.height,
    experience: characters.base_experience,
    type: characters.types?.[0].type.name,
    type1: characters.types?.[1].type.name,

  }
  const changeColor = () => {
    let bg = backgrounds.filter(e => {
      return e.type === characters.types?.[0].type.name
    })
    return bg[0]?.background
  }

  document.body.style.background = changeColor();
  const changeColorFont = () => {
    let bg = backgrounds.filter(e => {
      return e.type === characters.types?.[0].type.name
    })
    return bg[0]?.border
  }
  //console.log(pokemon);

  return (
    <div className="card-container">

      <div className="pokemon-container">

        <div className="power-level">
          CP<span>514</span>
          <div className="pokemon-snap">
            <img src={getPokemon.image} alt="pokemon" />
          </div>

          <div className="half-circle"></div>
        </div>


        <div className="poke-card">

          <div className="name">
            <h1 style={{color:changeColorFont()}}>{getPokemon.name}</h1>
            <div className="hp" style={{color:changeColorFont()}}>
              HP {getPokemon.hp}/{getPokemon.hp}
            </div>
          </div>

          <ul className="stats" style={{color:changeColorFont()}}>
            <li>{getPokemon.type} / {getPokemon.type1}<br /><span>Type</span></li>
            <li>{getPokemon.weight}kg<br /><span>Weight</span></li>
            <li>{getPokemon.height}m<br /><span>Height</span></li>
          </ul>

          <div className="info">

            <div className="dusty-candy">
              <div className="dust">
                <i></i> 10514<br />
                <span>{getPokemon.ability1}</span>
              </div>
              <div className="candy">
                <i></i> 50<br />
                <span>{getPokemon.ability}</span>
              </div>
            </div>

            <div className="power-up">
              <div className="button">Power Up</div>
              <i className="stardust"></i> 1000
              <i className="candy"></i> 1
            </div>

          </div>

          <ul className="abilities" style={{color:changeColorFont()}}>
            <li>
              Lick<br />
              <span>{getPokemon.type}</span>
              <span className="power">15</span>
            </li>
            <li>
              {getPokemon.ability}<br />
              <span>{getPokemon.type}</span>
              <span className="power">60</span>
              <ul className="super">
    
              </ul>
            </li>
            <li style={{color:changeColorFont()}}>
              Atack<br />
              <span>{getPokemon.type}</span>
              <span className="power">{getPokemon.attack}</span>
              <ul className="super">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              Defense<br />
              <span>{getPokemon.type}</span>
              <span className="power">{getPokemon.defense}</span>
              <ul className="super">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              Speed<br />
              <span>{getPokemon.type}</span>
              <span className="power">{getPokemon.speed}</span>
              <ul className="super">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
          <div className="caught">
            Movements
            <div className="moves">
              {
                characters.moves?.map(characters => (
                  <div className="card-stat" key={characters.move.name}>
                    <div className="value">move: {characters.move.name}</div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="transfer">
          </div>
        </div>
      </div>
    </div>
    /*
    <div className="cards-container">
      <div className="grid-father_container">
        <div className="pokeCard">
          <div className="card-image_container card-image_pokemon">
            { <img src="https://www.pngarts.com/files/3/Bulbasaur-Transparent-Image.png" alt="Pokemon" /> }
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
    */
  );
};

export default CharacterDetail;