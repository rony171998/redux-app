import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePokemon } from "../store/slice/pokemon.slice";
import { Card, Col, Row } from "react-bootstrap";

const PokemonCard = ({ characterUrl }) => {
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(characterUrl).then(res => setCharacter(res.data));
    }, [characterUrl]);

    const getId = () => {
        dispatch(changePokemon(character.id));
        navigate(`/pokedes/${character.id}`);
    };

    const typeColor =[
        {
            type: "normal",
            color: "#A8A77A"
        },
        {
            type: "fighting",
            color: "#C22E28"
        },
        {
            type: "flying",
            color: "#A98FF3"
        },
        {
            type: "poison",
            color: "#A33EA1"
        },
        {
            type: "ground",
            color: "#E2BF65"
        },
        {
            type: "rock",
            color: "#B8A038"
        }
        ,{
            type: "bug",
            color: "#62DB60"
        },
        {
            type: "ghost",
            color: "#735797"
        },
        {
            type: "steel",
            color: "#B7B7CE"
        },
        {
            type: "fire",
            color: "#EE8130"
        },
        {
            type: "water",
            color: "#6390F0"
        },
        {
            type: "grass",
            color: "#7AC74C"
        },
        {
            type: "electric",
            color: "#F7D02C"
        },
        {
            type: "psychic",
            color: "#F95587"
        },
        {
            type: "ice",
            color: "#96D9D6"
        },
        {
            type: "dragon",
            color: "#6F35FC"
        },
        {
            type: "dark",
            color: "#705746"
        },
        {
            type: "fairy",
            color: "#DDA0DD"
        },
        {
            type: "unknown",
            color: "#6C6C6C"
        },
        {
            type: "shadow",
            color: "#000000"
        }
    ] 

    const getType = type => {
        const color = typeColor.find(item => item.type === type);
        return color.color;
                 
    }
    
    return (
        <div onClick={getId}>
            
            <Card.Img
              className="p-1"
                src={character.sprites?.other.dream_world.front_default}
                alt="pokemon"
                style={{ width: "15rem", height: "15rem" }}
                
            ></Card.Img>
            
            <Card.Body className="">
                <Card.Title className="">
                    {character.name}
                </Card.Title>
                <Row md={2} className="">
                    {character.types?.map(type => {
                        return (
                            <Card.Text className="rounded-pill" key={type.type.name}
                                style={{ backgroundColor: getType(type.type.name) ,height: "2rem"}}
                            >
                                {type.type.name}
                            </Card.Text>
                        )
                            
                    })}
                </Row>
                <Row md={2} className="">
                    {character.stats?.map(stat => {
                        return (
                            <Col key={stat.stat.name}>
                                <Card.Text>{stat.stat.name}</Card.Text>
                                <Card.Text>{stat.base_stat}</Card.Text>
                            </Col>
                            
                        );
                    })}
                </Row>
            </Card.Body>
        </div>
    );
};

export default PokemonCard;
