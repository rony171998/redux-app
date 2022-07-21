import React from "react";
import { Row } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard";


const PokemonMap = ({ pokemons }) => {

    return (
        <div>
            {
                pokemons[0]?.pokemon === undefined ? (
                <Row md={4} className="p-5">
                    {pokemons.map(pokemon => (
                        <PokemonCard
                            pokemonUrl={pokemon.url}
                            key={pokemon.name}
                        />
                    ))}
                </Row>
            ) : (
                <Row md={4} className="p-5">
                    {pokemons.map(pokemon => (
                        <PokemonCard
                            pokemonUrl={pokemon.pokemon?.url}
                            key={pokemon.pokemon?.name}
                        />
                    ))}
                </Row>
            )}

            
            
        </div>
    );
};

export default PokemonMap;
