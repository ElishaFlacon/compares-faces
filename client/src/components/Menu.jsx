import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import '../styles/Menu.css';


function Menu(props) {

    return (
        <ToggleButtonGroup
            color="primary"
            value={props.value}
            exclusive
            onChange={props.change}
        >
            {props.buttons.map((data) => {
                return (
                    <ToggleButton className='menu-button' value={data[1]} key={data[1]}>
                        {data[0]}
                    </ToggleButton>
                );
            })}
        </ToggleButtonGroup>
    );
}


export default Menu