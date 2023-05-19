import React from 'react';
import { Snackbar, Alert } from '@mui/material';


function Snack(props) {


    return (
        <Snackbar
            open={props.open}
            autoHideDuration={3000}
            onClose={props.close}
        >
            <Alert severity={props.severity} sx={{ width: '100%' }}>
                {props.text}
            </Alert>
        </Snackbar>
    );
}


export default Snack