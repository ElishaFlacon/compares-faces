import React, { useMemo, useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import axios from 'axios';
import config from '../config';
import '../styles/Upload.css';
import PictureLoader from './PictureLoader';


function Upload(props) {

    const [person, setPerson] = useState({
        name: '',
        age: '',
        gender: '',
        description: '',
    });

    const dataIsLoad = useMemo(() => {
        return !Object.values(person).some(element => !element) && props.picture[0];
    }, [person, props.picture])

    const changePerson = (value) => {
        setPerson({ ...person, ...value })
    }

    const uploadPerson = async () => {
        const formData = new FormData();

        formData.append('picture', props.picture[0]);
        for (const [key, value] of Object.entries(person)) {
            formData.append(key, value);
        }

        clear();
        const response = await axios.post(`${config.api}/api/post/upload-person`, formData);

        if (!response.data.load) {
            alert('Данные не были загружены! Возможно программа не может распознать лицо на фото!');
            return;
        }
        alert('Данные были загружены!');

        return response.data;
    }

    const clear = () => {
        props.setPicture()
        setPerson({
            name: '',
            age: '',
            gender: '',
            description: '',
        });
    }


    return (
        <Box className={'ub-row ub-al-end gap'}>

            <PictureLoader
                picture={props.picture}
                setPicture={props.setPicture}
                onChange={() => changePerson({ picture: props.picture })}
            />

            <Box className="ub-column ub-jc-end gap">
                <Box className={'ub-row gap'}>
                    <Box className={'ub-column gap'}>
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
                    Загрузить
                </Button>
            </Box>
        </Box>
    );
}


export default Upload