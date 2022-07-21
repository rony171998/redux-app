import React, { useEffect } from "react";
import { Pagination, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getPokemons } from "../store/slice/pokemons.slice";

const Paginations = ({ limit, offset, setOffset }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons(limit,offset));
    }, [limit, offset, dispatch]);

    const getNext = () => {
        
        setOffset(offset + limit);
    };

    const getPrev = () => {
        
        if (offset !== 0) {
            setOffset(offset - limit);
        }
    };
    return (
        <Card.Body>
            <Pagination>
                <Pagination.Prev onClick={getPrev} />
                <Pagination.Item onClick={()=>setOffset(0)}>1</Pagination.Item>
                <Pagination.Item onClick={()=>setOffset(limit)}>2</Pagination.Item>
                <Pagination.Item onClick={()=>setOffset(limit*2)}>3</Pagination.Item>
                <Pagination.Item onClick={()=>setOffset(limit*3)}>4</Pagination.Item>
                <Pagination.Item onClick={()=>setOffset(limit*4)}>5</Pagination.Item>
                <Pagination.Item onClick={()=>setOffset(limit*5)}>6</Pagination.Item>
                <Pagination.Item onClick={()=>setOffset(limit*6)}>7</Pagination.Item>
                <Pagination.Next onClick={getNext} />
                
            </Pagination>
        </Card.Body>
    );
};

export default Paginations;
