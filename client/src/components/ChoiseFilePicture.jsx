import React from 'react';


function ChoiseFilePicture(props) {
    return (
        <div className={props.isLoad ? 'chosen-file' : 'choise-file'} />
    );
}


export default ChoiseFilePicture