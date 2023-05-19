import React, { useMemo } from 'react';
import { Button, Box } from '@mui/material';
import ChoiseFilePicture from './ChoiseFilePicture';


const maxTextLength = 15;


function PictureLoader({ picture, setPicture }) {

    const pictureLoader = (event) => {
        if (!event.target.files[0]) {
            return;
        }

        setPicture(event.target.files);
    }

    const loadState = useMemo(() => {
        return picture ? true : false;
    }, [picture])

    const buttonText = useMemo(() => {
        if (!loadState) {
            return 'Выберите фото';
        }

        if (picture[0].name.length > maxTextLength) {
            const format = picture[0].name.split('.').at(-1);

            return `${picture[0].name.substring(0, maxTextLength - 3)}...${format}`;
        }

        return picture[0].name;

    }, [picture])


    return (
        <Box className='flex-center-column'>
            <ChoiseFilePicture isLoad={loadState} />

            <Button variant="outlined" component="label" >
                {buttonText}
                <input hidden type="file" accept="image/*" onChange={pictureLoader} />
            </Button>
        </Box>
    );
}


export default PictureLoader