import React from 'react';


function ChoiseFilePicture(props) {
    return (
        <div className={props.file ? 'chosen-file' : 'choise-file'} />
    );
}


export default ChoiseFilePicture