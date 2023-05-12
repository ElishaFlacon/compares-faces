import React from 'react';
import { Button, Box, TextField } from '@mui/material';
import ChoiseFilePicture from './ChoiseFilePicture';
import '../styles/Upload.css';


function Upload(props) {
    const uploadPictureButtonText = props.picture ? props.picture[0].name : 'Выберите фото';
    const pictureIsLoad = props.picture ? true : false;
    const dataIsLoad = pictureIsLoad && props.person.name && props.person.age && props.person.gender && props.person.description ? true : false;


    return (
        <Box className={'ub-row ub-al-end gap'}>
            <Box className='flex-center-column'>
                <ChoiseFilePicture file={pictureIsLoad} />

                <Button variant="outlined" component="label" >
                    {uploadPictureButtonText}
                    <input hidden type="file" accept="image/*" onChange={props.pictureHandler} />
                </Button>
            </Box>

            <Box className="ub-column ub-jc-end gap">
                <Box className={'ub-row gap'}>
                    <Box className={'ub-column gap'}>
                        <TextField
                            value={props.person.name}
                            onChange={(event) => props.changeHandler({ name: event.target.value })}
                            label="ФИО"
                            variant="outlined"
                        />
                        <TextField
                            value={props.person.age}
                            onChange={(event) => props.changeHandler({ age: event.target.value })}
                            label="Возраст"
                            variant="outlined"
                            type='number'
                        />
                        <TextField
                            value={props.person.gender}
                            onChange={(event) => props.changeHandler({ gender: event.target.value })}
                            label="Пол"
                            variant="outlined"
                        />
                    </Box>

                    <TextField
                        value={props.person.description}
                        onChange={(event) => props.changeHandler({ description: event.target.value })}
                        label="Описание"
                        variant="outlined"
                        multiline
                        minRows={7}
                        maxRows={7}
                    />
                </Box>

                <Button variant="outlined" component='button' disabled={!dataIsLoad} onClick={props.uploadHandler}>
                    Загрузить
                </Button>
            </Box>
        </Box>
    );
}


export default Upload