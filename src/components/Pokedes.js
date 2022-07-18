import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import { changePokemon } from "../store/slice/pokemon.slice";
import { useDispatch } from "react-redux";
import {
    Container,
    Card,
    Button,
    Row,
    Form,
    DropdownButton,
    Dropdown,
    Pagination,
    FormControl,
    InputGroup,
} from "react-bootstrap";

const Characters = () => {
    const user = useSelector(state => state.user);
    const [pokemon, setPokemon] = useState("");

    const [characters, setCharacters] = useState([]);
    const [types, setTypes] = useState([]);
    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(20);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
            .then(res => setCharacters(res.data.results));
    }, []);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/type`)
            .then(res => setTypes(res.data.results));
    }, []);

    const getId = () => {
        dispatch(changePokemon(pokemon));
        navigate(`/pokedes/${pokemon}`);
    };

    const getNext = () => {
        setLimit(+20);
        setOffset(offset + 20);
        setCharacters([]);
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            )
            .then(res => setCharacters(res.data.results));
    };
  

    return (
        <Container>
            <Card>
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
                
                <Card.Body>
                    
                    <Form className="p-5 pb-0">
                        <Form.Label><h2>Welcome {user}!</h2></Form.Label>
                        <InputGroup className="">
                            <FormControl className=""
                                type="text"
                                value={pokemon}
                                onChange={e => setPokemon(e.target.value)}
                                placeholder="Search for a pokemon"
                            />

                            <Button onClick={getId}>Buscar</Button>
                            <DropdownButton title="Todos">
                                {types.map(type => (
                                    <Dropdown.Item
                                        key={type.name}
                                        value={type.name}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                            <DropdownButton title="Pagination">
                                <Dropdown.Item>8</Dropdown.Item>
                                <Dropdown.Item>12</Dropdown.Item>
                                <Dropdown.Item>16</Dropdown.Item>
                                <Dropdown.Item>20</Dropdown.Item>
                                <Dropdown.Item>40</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Form>

                    <Row md={4} className="p-1">
                        {characters.map(character => (
                            <Card key={character.name} className=" my-2" align="center">
                                <PokemonCard characterUrl={character.url} />
                            </Card>
                        ))}
                    </Row>

                    <Button onClick={getNext}>Siguiente pagina</Button>

                    <Pagination className="p-5">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Next onClick={getNext} />
                        <Pagination.Last />
                    </Pagination>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Characters;
