import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import classes from './Loading.module.css';


function Loading(props) {
    return (
        <Box className={classes.loading__container}>
            <CircularProgress size={`${props.size}px`} />
        </Box>
    );
}


export default Loading