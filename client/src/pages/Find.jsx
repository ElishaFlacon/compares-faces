import React, { useState, useContext, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import PictureLoader from '../components/PictureLoader';
import { AppContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import ModalForResults from '../components/UI/modal/ModalForResults';
import FindService from '../API/FindService';


function Find() {
    const { picture, setPicture, setSnack } = useContext(AppContext);
    const [persons, setPersons] = useState('');
    const [modalState, setModalState] = useState(false);

    const [findPersons, isLoading, error] = useFetching(async () => {
        const formData = new FormData();
        formData.append('picture', picture[0]);

        const response = await FindService.findAll(formData);

        if (!response.load) {
            modalClose();
            setSnack([true, 'Данные не были получены, невозможно распознать лицо!', "error"])
            return;
        }

        setPersons(response);
    })

    const modalOpen = () => setModalState(true);
    const modalClose = () => {
        setPicture('');
        setPersons('');
        setModalState(false);
    }

    useEffect(() => {
        if (isLoading) {
            modalOpen();
        }
    }, [isLoading])

    useEffect(() => {
        if (error) {
            modalClose();
        }
    }, [error])


    return (
        <Box className='flex-center-column gap'>
            <PictureLoader />
            <Button variant="outlined" component='button' disabled={!picture[0]} onClick={findPersons}>
                Найти
            </Button>

            <ModalForResults open={modalState} close={modalClose} data={persons} />
        </Box >

    );
}


export default Find