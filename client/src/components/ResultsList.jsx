import React from 'react';
import { Box } from '@mui/material';
import Result from './Result';
import '../styles/ResultsList.css';


function ResultsList(props) {
    const results = props.data.data.map((person) => {
        return (
            <Result
                key={person.picture}
                image={person.picture}
                name={person.name}
                age={person.age}
                gender={person.gender}
                description={person.description}
            />
        );
    });


    return (
        <Box className={'results-box'}>
            {results}
        </Box>
    );
}


export default ResultsList