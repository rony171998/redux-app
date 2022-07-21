import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { changePokemon } from "../store/slice/idPokemon.slice";
import {
    getPokemons,
    getPokemonsType,
} from "../store/slice/pokemons.slice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
    Container,
    Card,
    Button,
    Form,
    DropdownButton,
    Dropdown,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import { Paginations ,PokemonMap } from "../components";

const Pokemons = () => {
    const user = useSelector(state => state.user);

    const [types, setTypes] = useState([]);
    const [limit, setLimit] = useState(8);
    const [offset, setOffset] = useState(0);
    
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let pokemons = useSelector(state => state.pokemons);
    
    useEffect(() => {
               
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then(res => setTypes(res.data.results));            
    }, []);

    const submit = data => {
        
        dispatch(changePokemon(data.name));
        navigate(`/pokedes/${data.name}`);
    };

    const getPokemonType = type => {
        dispatch(getPokemonsType(type));
    };

    const getPokemon = () => {
        dispatch(getPokemons(limit,offset));
    };

    const getOut=()=>{
        navigate("/");
    }
    
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
                <Card.Img className="mx-5 my-0" style={{width:"2rem",cursor:"pointer"}} 
                src="https://cdn-icons-png.flaticon.com/512/1828/1828395.png"
                onClick={getOut} />
                

                <Card.Body>
                    
                    <Form className="p-5 pb-0 pt-2" onSubmit={handleSubmit(submit)}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>
                                <h2>Welcome {user}!</h2>
                            </Form.Label>
                            
                            <InputGroup className="">
                                <FormControl
                                    className=""
                                    {...register("name")}
                                    type="search"
                                    placeholder="Search for a pokemon"
                                    autocomplete="off"
                                    
                                />

                                <Button type="submit">Buscar</Button>
                                <DropdownButton title="Types">
                                    <Dropdown.Item 
                                        onClick={() =>getPokemon()}>
                                        All Pokemons</Dropdown.Item>
                                    {types.map(type => (
                                        <Dropdown.Item
                                            key={type.name}
                                            value={type.name}
                                            onClick={() =>
                                                getPokemonType(type.name)
                                            }
                                        >
                                            {type.name}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <DropdownButton title="Pagination">
                                    <Dropdown.Item onClick={()=> {setLimit(8);setOffset(0)}}>
                                        8
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=> {setLimit(12);setOffset(0)}}>
                                        12
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=> {setLimit(16);setOffset(0)}}>
                                        16
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=> {setLimit(20);setOffset(0)}}>
                                        20
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=> {setLimit(40);setOffset(0)}}>
                                        40
                                    </Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </Form.Group>
                    </Form>                  
                    <PokemonMap pokemons={pokemons}/>

                    <Paginations limit={limit} offset={offset} setOffset={setOffset}/>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Pokemons;
