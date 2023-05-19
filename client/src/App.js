import React, { useMemo, useState } from 'react';
import { Container, Box } from '@mui/material';
import './App.css';
import DosyLogo from './components/DosyLogo';
import Find from './components/Find';
import Upload from './components/Upload';
import ModalForResults from './components/ModalForResults';
import Text from './components/Text';
import Menu from './components/Menu';
import config from './config';


function App() {
    // для загрузки фоток
    const [valuePicture, setValuePicture] = useState('');

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
        if (!select) {
            return;
        }

        setMenu(select);
    }


    const selectedOption = useMemo(() => {
        if (menu === 'find') {
            return (
                <Find
                    picture={valuePicture}
                    setPicture={setValuePicture}

                    modalOpen={modalHasOpen}
                    modalClose={modalHasClose}

                    getPersons={getPersons}
                />
            );
        }

        return <Upload picture={valuePicture} setPicture={setValuePicture} />;
    }, [menu, valuePicture])


    return (
        <Container className='app'>
            <Box className='main flex-center-column'>
                <DosyLogo />

                <Text text={config.aboutText} />

                <Menu
                    buttons={[
                        ['найти', 'find'],
                        ['загрузить', 'upload'],
                    ]}
                    value={menu}
                    onChange={menuChange}
                />

                {selectedOption}

                <ModalForResults open={modalState} closeHandler={modalHasClose} data={valuePersons} />

                <Text text={config.liabilityText} />
            </Box>
        </Container>
    );
}


export default App;
