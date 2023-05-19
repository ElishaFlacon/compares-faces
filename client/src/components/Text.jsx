import React from 'react';
import { Typography } from '@mui/material';
import '../styles/Text.css';


function Text(props) {
    return (
        <Typography className='text-block' fontSize={13}>
            {props.text}
        </Typography>
    );
}


export default Text