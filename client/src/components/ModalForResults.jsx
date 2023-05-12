import React from 'react';
import '../styles/ModalForResults.css';
import { Typography, Box, Modal } from '@mui/material';
import ResultsList from './ResultsList';
import Loading from './Loading';


const style = {
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


function ModalForResults(props) {
    const resultsList = props.data ? <ResultsList data={props.data} /> : undefined;
    const showResultList = resultsList ? resultsList : <Loading size={128} />;

    const resultHeader = (
        <Typography align='center' variant="h6" component="h2" sx={{ paddingBottom: '24px' }} >
            {props.data ? `Найдено результатов: ${props.data.data.length}` : 'Сканирование...'}
        </Typography>
    );


    return (
        <Modal open={props.open} onClose={props.closeHandler}>
            <Box className={'modal-container'} sx={style}>
                {resultHeader}
                {showResultList}
            </Box>
        </Modal>
    );
}


export default ModalForResults