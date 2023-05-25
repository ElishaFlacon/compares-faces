import React, { useContext, useMemo } from 'react';
import { Button, Box } from '@mui/material';
import ChoiseFilePicture from './UI/filePicture/ChoiseFilePicture';
import { AppContext } from '../context';


const maxTextLength = 15;


function PictureLoader() {
    const { picture, setPicture } = useContext(AppContext);

    const pictureLoader = (event) => {
        if (event.target.files[0]) {
            setPicture(event.target.files);
        }
    }

    const buttonText = useMemo(() => {
        if (!picture) {
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
            <ChoiseFilePicture isLoad={picture} />

            <Button variant="outlined" component="label" >
                {buttonText}
                <input hidden type="file" accept="image/*" onChange={pictureLoader} />
            </Button>
        </Box>
    );
}


export default PictureLoader