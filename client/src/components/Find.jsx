import React from 'react';
import { Button, Box } from '@mui/material';
import axios from 'axios';
import config from '../config';
import PictureLoader from './PictureLoader';


function Find(props) {

    const findPersons = async () => {
        const formData = new FormData();
        formData.append('picture', props.picture[0]);

        const response = await axios.post(`${config.api}/api/post/search`, formData);

        if (!response.data.load) {
            props.setSnack([true, 'Данные не были получены, невозможно распознать лицо!', "error"])
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
            props.setSnack([true, 'Сервер не работает или произошла непредвиденная ошибка!', "error"]);
        }
    }

    return (
        <Box className='flex-center-column gap'>
            <PictureLoader
                picture={props.picture}
                setPicture={props.setPicture}
            />

            <Button variant="outlined" component='button' disabled={!props.picture[0]} onClick={findHandler}>
                Найти
            </Button>
        </Box >

    );
}


export default Find