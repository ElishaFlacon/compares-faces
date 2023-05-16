import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Typography, ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import Find from './components/Find';
import ModalForResults from './components/ModalForResults';
import Upload from './components/Upload';


// console.error('бро, закрой консоль!');


// TODO сделать мемомизацию для всего! а то тут пиздец 
// TODO и сделать модалочки, для вывода инфы когда были загружены файлы или не загружены
// TODO настроить роуты
// TODO добавить config.js и туда вынести текст и дефолт адресс и всякое такое


function App() {
    const aboutText = 'DOSY - сервис поиска людей по фотографии.\
     Благодаря технологии нейронных сетей и машинному обучению\
     мы поможем вам найти нужного человека или очень на него похожего\
     в течение нескольких секунд.Результатом является полная информация о человеке.';

    const liabilityText = 'Пожалуйста, не предоставляйте никакой личной информации.\
     DOSY не несет ответственности за содержание вашей отправки.';


    // для загрузки фоток
    const [valuePicture, setValuePicture] = useState('');

    const pictureHandler = (event) => {
        console.log('pictureHandler');
        if (!event.target.files[0]) {
            return;
        }

        setValuePicture(event.target.files);
    }


    // для загрузки данных нового человека
    const [valueNewPerson, setValueNewPerson] = useState({
        name: '',
        age: '',
        gender: '',
        description: '',
    });

    const newPersonHandler = (value) => {
        console.log('valueperson');
        setValueNewPerson(value);
    }

    const uploadHandler = async () => {
        console.log('uploadHandler');
        const formData = new FormData();

        formData.append('picture', valuePicture[0]);
        for (const [key, value] of Object.entries(valueNewPerson)) {
            formData.append(key, value);
        }

        setValuePicture('');
        setValueNewPerson({
            name: '',
            age: '',
            gender: '',
            description: '',
        });

        const response = await axios.post('http://localhost:5000/api/post/upload-person', formData);

        if (!response.data.load) {
            alert('Данные не были загружены! Возможно программа не может распознать лицо на фото!');
            return;
        }

        alert('Данные были загружены!');

        return response.data;
    }


    // для получения данных о найденых людях с сервера
    const [valuePersons, setValuePersons] = useState('');

    const getPersons = (data) => {
        setValuePersons(data);
    }


    // для модального окна с результатами поиска
    const [modalState, setModalState] = useState(false);

    const modalHasOpen = () => {
        setModalState(true);
    }
    const modalHasClose = () => {
        setValuePicture('');
        setValuePersons('');
        setModalState(false);
    }


    // для меню выбора функции найти или загрузить
    const [menu, setMenu] = useState('find');
    const menuChange = (event, select) => {
        console.log('menuChange');
        if (!select) {
            return;
        }

        setMenu(select);
    }

    // const selectedOptions = 


    return (
        <Container className='app'>
            <Box className='main flex-center-column'>
                <div className="dosy-logo" />

                <Typography className='text-block' fontSize={13}>
                    {aboutText}
                </Typography>

                <ToggleButtonGroup color="primary" value={menu} exclusive onChange={menuChange}>
                    <ToggleButton className='toglbtn' value="find">Поиск</ToggleButton>
                    <ToggleButton className='toglbtn' value="upload">Загрузить</ToggleButton>
                </ToggleButtonGroup>

                {menu === 'find'
                    ? <Find
                        picture={valuePicture}
                        pictureHandler={pictureHandler}

                        modalOpen={modalHasOpen}
                        modalClose={modalHasClose}

                        getPersons={getPersons}
                    />
                    : <Upload
                        picture={valuePicture}
                        pictureHandler={pictureHandler}

                        person={valueNewPerson}
                        changeHandler={newPersonHandler}

                        uploadHandler={uploadHandler}
                    />
                }

                <ModalForResults open={modalState} closeHandler={modalHasClose} data={valuePersons} />

                <Typography className='text-block' fontSize={13}>
                    {liabilityText}
                </Typography>

                <Typography className='text-block' fontSize={13}>
                    🛈 Наше приложение имеет открытый {
                        <a rel="noreferrer" className='link' href="https://github.com/ElishaFlacon/compares-faces">
                            исходынй код
                        </a>
                    }.
                </Typography>
            </Box>
        </Container>
    );
}


export default App;
