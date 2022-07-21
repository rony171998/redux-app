import React from 'react';
import { Card, Row } from 'react-bootstrap';

const PokemonMoves = ({pokemon ,toUpperFirtLetter,getColor }) => {
    return (
        <Card>
                <Card.Body align="center">
                   
                    <Row md="auto" className="g-0 p-5">
                        {pokemon.moves?.map(stat => {
                            return (
                                <Card.Text className="p-2 rounded-pill" key={stat.move.name} 
                                    style={{backgroundColor: getColor() , height: "2.5rem"}}
                                >
                                    {toUpperFirtLetter(stat.move.name)}
                                </Card.Text>
                            );
                        })}
                    </Row> 
                </Card.Body>
            </Card>
    );
};

export default PokemonMoves;