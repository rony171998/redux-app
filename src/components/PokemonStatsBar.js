import React from 'react';
import { Card, ProgressBar, Row } from "react-bootstrap";

const PokemonStatsBar = ({pokemon ,getColor,toUpperFirtLetter}) => {
    return (
        <Card align="center">
            <Card.Body>
              <Row className="g-0 p-5">
                       
                       {pokemon.stats?.map(stat => {
                        return (                          
                            <Card.Body key={stat.stat.name}>
                                <Card.Text align="left">
                                    {toUpperFirtLetter(stat.stat.name)} {stat.base_stat}
                                </Card.Text>
                                <ProgressBar>
                                    <ProgressBar
                                        animated                 
                                        now={stat.base_stat}
                                        style={{backgroundColor: getColor()}}
                                    />
                                    
                                </ProgressBar>
                            </Card.Body>
                        );
                    })} 
                    </Row>                    
            </Card.Body>
            
        </Card>
    );
};

export default PokemonStatsBar;