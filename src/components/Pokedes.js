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
  const [types, setTypes] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(20);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((res) => setCharacters(res.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((res) => setTypes(res.data.results));
  }, []);

  //console.log(types)

  const getId = () => {
    dispatch(changePokemon(pokemon));
    navigate(`/pokedes/${pokemon}`);
  };

  const getNext = () => {
    setLimit(+20)
    setOffset(offset+20)
    setCharacters([])
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((res) => setCharacters(res.data.results));
  };
    /*const getTypes =()=>{
      axios.get(`https://pokeapi.co/api/v2/type/1?offset=0&limit=20`)
      .then((res) => setCharacters(res.data.pokemon));  
    }*/
  
  return (
    <div>
      <h1>Pokemons</h1>
      <h2>Welcome {user}!</h2>
      <input type="text"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}/>
      <button onClick={getId}>Buscar</button>
      <select >
        <option value="">Todos</option>
        {
            types.map((types)=>(
                <option value={types.id} key={types.name}>{types.name}</option>
            ))
        } 
      </select><br />

      <button onClick={getNext}>Siguiente pagina</button>
      {
        
        characters.map((character) => (
        <div key={character.name}>
          <PokemonCard characterUrl={character.url} /> 
        </div>
         
      ))}

      <button onClick={getNext}>Siguiente pagina</button>
    </div>
  );
};

export default Characters;