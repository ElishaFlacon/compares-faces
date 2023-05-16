import React from 'react';
import { Button, Box } from '@mui/material';
import ChoiseFilePicture from './ChoiseFilePicture';
import axios from 'axios';


function Find(props) {
    const uploadPictureButtonText = props.picture ? props.picture[0].name : 'Выберите фото';
    const pictureIsLoad = props.picture ? true : false;

    const findPersons = async () => {
        const formData = new FormData();
        formData.append('picture', props.picture[0]);

        const response = await axios.post('http://localhost:5000/api/post/search', formData);

        if (!response.data.load) {
            alert('Данные не были получены! Возможно программа не может распознать лицо на фото!');
        }

        return response.data;
    }

    const findHandler = async () => {
        try {
            props.modalOpen();
            const data = await findPersons();

            if (!data.load) {
                props.modalClose();
                props.getPersons();
                return;
            }

            props.getPersons(data);
        } catch (error) {
            props.modalClose();
            props.getPersons();
            alert('Сервер умер!');
        }
    }

    return (
        <Box className='flex-center-column'>
            <ChoiseFilePicture file={pictureIsLoad} />

            <Box className={'flex-center-row gap'}>
                <Button variant="outlined" component="label" >
                    {uploadPictureButtonText}
                    <input hidden type="file" accept="image/*" onChange={props.pictureHandler} />
                </Button>

                <Button variant="outlined" component='button' disabled={!pictureIsLoad} onClick={findHandler}>
                    Найти
                </Button>
            </Box>
        </Box >

    );
}


export default Find