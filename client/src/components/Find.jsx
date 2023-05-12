import React from 'react';
import { Button, Box } from '@mui/material';
import ChoiseFilePicture from './ChoiseFilePicture';


function Find(props) {
    const uploadPictureButtonText = props.picture ? props.picture[0].name : 'Выберите фото';
    const pictureIsLoad = props.picture ? true : false;


    return (
        <Box className='flex-center-column'>
            <ChoiseFilePicture file={pictureIsLoad} />

            <Box className={'flex-center-row gap'}>
                <Button variant="outlined" component="label" >
                    {uploadPictureButtonText}
                    <input hidden type="file" accept="image/*" onChange={props.pictureHandler} />
                </Button>

                <Button variant="outlined" component='button' disabled={!pictureIsLoad} onClick={props.findHandler}>
                    Найти
                </Button>
            </Box>
        </Box >

    );
}


export default Find