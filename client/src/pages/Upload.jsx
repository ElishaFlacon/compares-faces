import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import UploadService from '../API/UploadService';
import '../styles/Upload.css';
import PictureLoader from '../components/PictureLoader';
import { AppContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import Loading from '../components/UI/loading/Loading';


const personObject = {
    name: '',
    age: '',
    gender: '',
    description: '',
}


function Upload() {
    const { picture, setPicture, setSnack } = useContext(AppContext);
    const [person, setPerson] = useState(personObject);

    const dataIsLoad = useMemo(() => {
        return !Object.values(person).some(element => !element) && picture;
    }, [person, picture])

    const changePerson = (value) => {
        setPerson({ ...person, ...value })
    }

    const [uploadPerson, isLoading, error] = useFetching(async () => {
        const formData = new FormData();
        formData.append('picture', picture[0]);
        for (const [key, value] of Object.entries(person)) {
            formData.append(key, value);
        }

        clear();

        const response = await UploadService.uploadPerson(formData);

        if (!response.load) {
            setSnack([true, 'Данные не были загружены, невозможно распознать лицо!', "error"])
            return;
        }

        setSnack([true, 'Данные были загружены!', "success"])
    })

    const clear = () => {
        setPerson(personObject);
        setPicture('');
    }

    useEffect(() => {

    }, [isLoading])


    return (
        <Box className={'ub-row ub-al-end gap'}>
            <PictureLoader />

            <Box className="ub-column ub-jc-end gap">
                <Box className='ub-row gap'>
                    <Box className='ub-column gap'>
                        <TextField
                            value={person.name}
                            onChange={(event) => changePerson({ name: event.target.value })}
                            label="ФИО"
                            variant="outlined"
                        />
                        <TextField
                            value={person.age}
                            onChange={(event) => changePerson({ age: event.target.value })}
                            label="Возраст"
                            variant="outlined"
                            type='number'
                        />
                        <TextField
                            value={person.gender}
                            onChange={(event) => changePerson({ gender: event.target.value })}
                            label="Пол"
                            variant="outlined"
                        />
                    </Box>

                    <TextField
                        value={person.description}
                        onChange={(event) => changePerson({ description: event.target.value })}
                        label="Описание"
                        variant="outlined"
                        multiline
                        minRows={7}
                        maxRows={7}
                    />
                </Box>

                <Button variant="outlined" component='button' disabled={!dataIsLoad} onClick={uploadPerson}>
                    {isLoading ? <Loading size={24} /> : 'Загрузить'}
                </Button>
            </Box>
        </Box>
    );
}


export default Upload