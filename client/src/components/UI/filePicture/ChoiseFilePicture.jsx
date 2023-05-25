import React from 'react';
import classes from './ChoiseFilePicture.module.css';


function ChoiseFilePicture(props) {
    return (
        <div className={props.isLoad ? classes.fun : classes.sad} />
    );
}


export default ChoiseFilePicture