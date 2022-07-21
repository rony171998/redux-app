import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePokemon } from "../store/slice/idPokemon.slice";
import { Card, Row } from "react-bootstrap";
import axios from "axios";
import { getPokemonUrl } from "../store/slice/pokemon.slice";

const PokemonCard = ({ pokemonUrl }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pokemon, setPokemons] = useState({});
    const [colorBackground, setColorBackground] = useState("");

    //let pokemonn = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(getPokemonUrl(pokemonUrl));
        axios.get(pokemonUrl).then(res => setPokemons(res.data));

        axios
            .get(pokemonUrl)
            .then(res => setColorBackground(res.data.types?.[0].type.name));
    }, [pokemonUrl, dispatch]);

    const getId = () => {
        dispatch(changePokemon(pokemon.id));
        navigate(`/pokedes/${pokemon.id}`);
    };

    const getType = type => {
        const color = typeColor.find(item => item.type === type);
        return color.color;
    };

    const toUpperFirtLetter = str => {
        if (str !== undefined) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
    };
    const typeColor = [
        {
            type: "normal",
            color: "#A8A77A",
        },
        {
            type: "fighting",
            color: "#C22E28",
        },
        {
            type: "flying",
            color: "#A98FF3",
        },
        {
            type: "poison",
            color: "#A33EA1",
        },
        {
            type: "ground",
            color: "#E2BF65",
        },
        {
            type: "rock",
            color: "#B8A038",
        },
        {
            type: "bug",
            color: "#62DB60",
        },
        {
            type: "ghost",
            color: "#735797",
        },
        {
            type: "steel",
            color: "#B7B7CE",
        },
        {
            type: "fire",
            color: "#EE8130",
        },
        {
            type: "water",
            color: "#6390F0",
        },
        {
            type: "grass",
            color: "#7AC74C",
        },
        {
            type: "electric",
            color: "#F7D02C",
        },
        {
            type: "psychic",
            color: "#F95587",
        },
        {
            type: "ice",
            color: "#96D9D6",
        },
        {
            type: "dragon",
            color: "#6F35FC",
        },
        {
            type: "dark",
            color: "#705746",
        },
        {
            type: "fairy",
            color: "#DDA0DD",
        },
        {
            type: "unknown",
            color: "#6C6C6C",
        },
        {
            type: "shadow",
            color: "#000000",
        },
    ];

    const getColor = () => {
        if (colorBackground !== "") {
            return typeColor.find(type => type.type === colorBackground).color;
        }
    };

    
    return (
        <Card
            className="p-0"
            onClick={getId}
            align="center"
        >
            <Card.Img
                className="p-1"
                src={pokemon.sprites?.other.dream_world.front_default}
                alt="pokemon"
                
                style={{ backgroundColor: getColor(),width: "auto", height: "15rem",cursor: "pointer" }}
            ></Card.Img>

            <Card.Body className="">
                <Card.Title className="">{toUpperFirtLetter(pokemon.name) }</Card.Title>
                <Row md={2} className="">
                    {pokemon.types?.map(type => {
                        return (
                            <Card.Text
                                className="rounded-pill"
                                key={type.type.name}
                                style={{
                                    backgroundColor: getType(type.type.name),
                                    height: "2rem",
                                }}
                            >
                                {toUpperFirtLetter(type.type.name) }
                            </Card.Text>
                        );
                    })}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default PokemonCard;
