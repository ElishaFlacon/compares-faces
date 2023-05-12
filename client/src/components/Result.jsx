import React from 'react';
import '../styles/Result.css';
import { Typography, Box, Card } from '@mui/material';


function Result(props) {


    return (
        <Card className={'result-container'} raised>
            <Box className={'flex-center-row result-image-box'}>
                <img className={'result-image'} src={`http://localhost:5000/api/get/image?name=${props.image}`} alt=" " />
            </Box>

            <Typography className='result-text'>
                {props.name}, {props.age} лет, пол {props.gender}. {props.description}
            </Typography>
        </Card>
    );
}


export default Result