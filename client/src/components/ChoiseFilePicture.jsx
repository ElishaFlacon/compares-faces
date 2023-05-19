import React from 'react';
import '../styles/ChoiseFilePicture.css';


function ChoiseFilePicture(props) {
    return (
        <div className={props.isLoad ? 'chosen-file' : 'choise-file'} />
    );
}


export default ChoiseFilePicture