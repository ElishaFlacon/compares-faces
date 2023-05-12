import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import '../styles/Loading.css';


function Loading(props) {


    return (
        <Box className={'loading-container'}>
            <CircularProgress size={`${props.size}px`} />
        </Box>
    )
}


export default Loading