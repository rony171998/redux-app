import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CharacterDetail = () => {
    const pokemon = useSelector(state => state.pokemon);

    const [characters, setCharacters] = useState([]);
    const [colorBackground, setColorBackground] = useState("");

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => setCharacters(res.data));
            
    }, [pokemon]);

    const toUpperFirtLetter = str => {
        if (str !== undefined) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
    }
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
        <Container>
            <Card className="mb-5">
                <svg
                    
                    viewBox="0 0 1440 203"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_20_956)">
                        <rect width="1440" height="123.181" fill="#DD1A1A" />
                        <rect
                            y="111.295"
                            width="1440"
                            height="49.7047"
                            fill="#0C0C0C"
                        />
                        <circle
                            cx="1296.5"
                            cy="136.5"
                            r="52.5"
                            fill="white"
                            stroke="black"
                            strokeWidth="12"
                        />
                        <circle
                            cx="1296.5"
                            cy="136.5"
                            r="25.5"
                            fill="#212121"
                            stroke="black"
                            strokeWidth="12"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_20_956"
                            x="-4"
                            y="0"
                            width="1448"
                            height="203"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_20_956"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_20_956"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>

                <Card.Body align="center">
                    <Card.Img
                        className="center-block"
                        variant="top"
                        src={
                            characters.sprites?.other.dream_world.front_default
                        }
                        alt="pokemon"
                        style={{ width: "15rem", height: "15rem" }}
                    ></Card.Img>
                    <Card.Title>
                        <h1>#{characters.id}</h1>
                        <h1>{toUpperFirtLetter(characters.name) }</h1>
                    </Card.Title>

                    <Row xs={1} md={2} className="g-0">

                        <Col>
                            <Card.Title>Types</Card.Title>
                            <Row md={2} className="g-0 m-1">
                                {characters.types?.map(type => {
                                    return (
                                        
                                        <Card.Text className="p-2 rounded-pill" key={type.type.name}
                                            style={{backgroundColor: getType(type.type.name) , height: "2.5rem"}}
                                        >
                                            {
                                                toUpperFirtLetter(type.type.name)                                         
                                            }
                                            {
                                                ()=> setColorBackground(getType(type.type.name))
                                            }
                                            
                                        </Card.Text>
                                        
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col>
                            <Card.Title>Abilities</Card.Title>
                            <Row md={2} className="g-0 m-1" >
                                {characters.abilities?.map(ability => {
                                    return (
                                        <Card.Text  className="p-2 rounded-pill bg-light" key={ability.ability.name}
                                            style={{backgroundColor: colorBackground , height: "2.5rem"}}
                                        >
                                            {toUpperFirtLetter(ability.ability.name)}
                                        </Card.Text>
                                    );
                                })}
                            </Row>
                        </Col>
                        
                    </Row>
                    
                    <Row className="g-0 p-5">
                       <Card.Title>Stast</Card.Title> 
                       {characters.stats?.map(stat => {
                        return (
                            <Card.Body key={stat.stat.name}>
                                <Card.Text align="left">
                                    {toUpperFirtLetter(stat.stat.name)} {stat.base_stat}
                                </Card.Text>
                                <ProgressBar>
                                    <ProgressBar
                                        animated                 
                                        now={stat.base_stat}
                                        style={{backgroundColor: colorBackground}}
                                    />
                                    <br />
                                </ProgressBar>
                            </Card.Body>
                        );
                    })} 
                    </Row>
                    

                    
                </Card.Body>
            </Card>
            <Card>
                <Card.Body align="center">
                   <Card.Title>
                    <h1>Movements</h1>                    
                    </Card.Title>
                    <Row md="auto" className="g-0 p-5">
                        {characters.moves?.map(stat => {
                            return (
                                <Card.Text className="p-2 rounded-pill bg-light" key={stat.move.name} 
                                    style={{backgroundColor: colorBackground}}
                                >
                                    {toUpperFirtLetter(stat.move.name)}
                                </Card.Text>
                            );
                        })}
                    </Row> 
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CharacterDetail;
