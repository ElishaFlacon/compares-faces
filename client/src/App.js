import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import './App.css';
import DosyLogo from './components/UI/logo/DosyLogo';
import Text from './components/Text';
import Menu from './components/Menu';
import Snack from './components/UI/snackbar/Snack';
import config from './config';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './context';


function App() {
    const [picture, setPicture] = useState('');

    const [snack, setSnack] = useState(false);
    const snackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnack(false);
    };

    const [menu, setMenu] = useState('');
    const menuChange = (event, select) => {
        if (!select) {
            return;
        }
        setMenu(select);
    }

    // без этого use effect, при перезагрузке страницы, мы бы находились по адрессу /upload
    // но при этом в меню отображалась кнопка найти, а не загрузить
    useEffect(() => {
        setMenu(window.location.pathname);
    }, [])


    return (
        <AppContext.Provider value={{
            picture,
            setPicture,
            setSnack,
        }}>
            <BrowserRouter>
                <Box className='main flex-center-column'>
                    <DosyLogo />
                    <Text text={config.aboutText} />

                    <Menu
                        buttons={[['найти', '/find'], ['загрузить', '/upload']]}
                        value={menu}
                        change={menuChange}
                    />

                    <AppRouter />

                    <Text text={config.liabilityText} />
                </Box>

                <Snack open={snack[0]} text={snack[1]} severity={snack[2]} close={snackClose} />
            </BrowserRouter>
        </AppContext.Provider>
    );
}


export default App;