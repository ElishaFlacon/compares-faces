import React, { useMemo, useState } from 'react';
import { Container, Box } from '@mui/material';
import './App.css';
import DosyLogo from './components/DosyLogo';
import Find from './components/Find';
import Upload from './components/Upload';
import ModalForResults from './components/ModalForResults';
import Text from './components/Text';
import Menu from './components/Menu';
import Snack from './components/Snack';
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

    // для снекбара
    const [snack, setSnack] = useState(false);
    const snackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnack(false);
    };
    const snackOpen = (text, severity) => {
        setSnack([true, severity, text]);
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

                    setSnack={setSnack}
                />
            );
        }

        return <Upload picture={valuePicture} setPicture={setValuePicture} setSnack={setSnack} />;
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
                    change={menuChange}
                />

                {selectedOption}

                <Text text={config.liabilityText} />
            </Box>

            <ModalForResults open={modalState} closeHandler={modalHasClose} data={valuePersons} />
            <Snack open={snack[0]} text={snack[1]} severity={snack[2]} close={snackClose} />

        </Container>
    );
}


export default App;
