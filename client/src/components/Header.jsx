import React from 'react';
import { IconButton, Button, Switch, Stack, } from '@mui/material';


function Header() {


    return (
        <Stack
            className='header'
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={12}
        >
            <div>
                <IconButton size='small'>
                    <img className='icon-image' src={require('../assets/dosy_logo.png')} alt=" " />
                </IconButton>

                <Button>
                    API
                </Button>
            </div>

            <Switch />
        </Stack>
    );
}


export default Header