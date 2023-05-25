import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';


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
                    <ToggleButton className='menu-button' value={data[1]} key={data[1]} sx={{ padding: 0 }}>
                        <Link to={data[1]} className='menu-link flex-center-row'>
                            {data[0]}
                        </Link>
                    </ToggleButton>
                );
            })}
        </ToggleButtonGroup>
    );
}


export default Menu