import React from "react";
import { Card } from "react-bootstrap";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";

const PokemonStatsRadar = ({ pokemon, getColor, toUpperFirtLetter }) => {
    let data = [];
    return (
        <Card align="center" style={{overflow:"auto"}}>
            <Card.Body>
                <RadarChart
                    height={500}
                    width={700}
                    outerRadius="70%"
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar
                        dataKey="x"
                        stroke={getColor()}
                        fill={getColor()}
                        fillOpacity={0.6}
                    />
                </RadarChart>
                {pokemon.stats?.map(stat => {
                    
                    return data.push({
                        name:
                            toUpperFirtLetter(stat.stat.name) +
                            " " +
                            stat.base_stat,
                        x: stat.base_stat,
                    });
                })}
                
                
            </Card.Body>
        </Card>
    );
};

export default PokemonStatsRadar;
