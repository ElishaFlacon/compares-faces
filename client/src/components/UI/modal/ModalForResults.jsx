import React from 'react';
import classes from './ModalForResults.module.css';
import { Typography, Box, Modal } from '@mui/material';
import ResultsList from '../../ResultsList';
import Loading from '../loading/Loading';


const style = {
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


function ModalForResults({ open, close, data }) {
    return (
        <Modal open={open} onClose={close}>
            <Box className={classes.modal__container} sx={style}>
                <Typography align='center' variant="h6" component="h2" sx={{ paddingBottom: '24px' }} >
                    {data
                        ?
                        `Найдено результатов: ${data.data.length}`
                        :
                        'Сканирование...'
                    }
                </Typography>

                {data
                    ?
                    <ResultsList data={data} />
                    :
                    <Loading size={128} />
                }
            </Box>
        </Modal>
    );
}


export default ModalForResults