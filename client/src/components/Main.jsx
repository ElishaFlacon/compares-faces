import React, { useState } from 'react'
import axios from 'axios';
import {
    IconButton,
    Button,
    Switch,
    Container,
    Stack,
    Typography,
    Box, Paper,
    Grid,
    Slider,
    TextField,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    CircularProgress,
    Modal,
    Card
} from '@mui/material';


const style = {
    position: 'absolute',

    display: 'flex',
    flexDirection: 'column',

    margin: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: 700,
    height: 500,

    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,

    overflowY: 'scroll',
};

function Main() {

    // const [value, setValue] = useState([0, 100]);
    // const [age, setAge] = useState();

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // const handleC = (event) => {
    //     setAge(event.target.value);
    // };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false); setChoto(''); setValuePicture(''); }


    const [valuePicture, setValuePicture] = useState('');

    const [cheto, setChoto] = useState();

    const pictureHandler = (e) => {
        if (!e.target.files[0]) {
            return;
        }

        setValuePicture(e.target.files)
    }

    const findPerson = async () => {
        const formData = new FormData();
        formData.append('picture', valuePicture[0]);
        const a = await axios.post('http://localhost:5000/api/post/face-v', formData);

        return a.data;
    }

    const yahzkaknazvattibya = async () => {
        const data = await findPerson()

        setChoto(
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    borderRadius: '4px',

                    gap: '24px',
                }}
            >
                {data.map((person) => {

                    return (
                        <Card
                            key={person[1]}
                            raised
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',

                                gap: '24px',
                                padding: '12px',

                                textAlign: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',

                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    width: '128px',
                                    height: '128px',
                                }}
                            >
                                <img className='imgm' src={`http://localhost:5000/get_image?name=${person[1]}`} alt=" " />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>

                                <Typography>
                                    {person[0][0][1]}, {person[0][0][2]} лет, пол {person[0][0][3]}. {person[0][0][4]}
                                </Typography>

                            </Box>
                        </Card>
                    );
                })}

            </Box>
        )
    }


    return (
        <div className='jopa'>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={12}

                sx={{
                    padding: '8px 16px 4px 16px',

                    position: 'sticky',
                    top: 0,

                    bgcolor: '#fff',

                    fontSize: '13px'
                }}
            >
                <div>
                    <IconButton size='small' aria-label="add to shopping cart">
                        <img className='testimg' src={require('../assets/images/dosy_logo.png')} alt=" " />
                    </IconButton>

                    <Button>
                        API
                    </Button>
                </div>


                <div className='asd'>
                    <Switch />
                </div>
            </Stack>

            {/* ------------------------------------------------------------ */}

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    gap: '42px',
                    padding: '24px',

                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="dosy-logo" />

                <Typography
                    sx={{
                        padding: '20px',
                        fontSize: '13px',
                        maxWidth: '580px',
                    }}
                >
                    DOSY - сервис поиска людей по фотографии. Благодаря технологии нейронных сетей и машинному обучению мы поможем вам найти нужного человека или очень на него похожего в течение нескольких секунд. Результатом является полная информация о человеке.
                </Typography>


                {/* <Paper
                    square
                    elevation={3}
                > */}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        className='modal-c'
                        sx={style}
                    >
                        <Typography id="modal-modal-title" align='center' variant="h6" component="h2" sx={{ paddingBottom: '24px' }}>
                            {cheto ? `Найдено результатов: ${cheto.props.children.length}` : 'Ожидайте...'}
                        </Typography>

                        {cheto ? cheto :
                            <Box
                                sx={{
                                    position: 'absolute',
                                    margin: 'auto',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',

                                }}
                            >
                                <CircularProgress size={'128px'} />
                            </Box>
                        }
                    </Box>
                </Modal>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >

                    <div className='choise-file' />


                    <Box
                        sx={{
                            display: 'flex',

                            gap: '12px',

                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant="outlined"
                            component="label"
                        >
                            {valuePicture ? valuePicture[0].name : 'Выберите фото'}
                            <input
                                hidden
                                type="file"
                                accept="image/*"
                                onChange={pictureHandler}
                            />
                        </Button>

                        <Button
                            variant="outlined"
                            component='button'

                            disabled={valuePicture ? false : true}

                            onClick={() => { yahzkaknazvattibya(); handleOpen(); }}
                        >
                            найти
                        </Button>
                    </Box>
                </Box>


                <Typography
                    sx={{
                        paddingTop: '24px',
                        maxWidth: '580px',
                        fontSize: '13px',
                    }}
                >
                    Пожалуйста, не предоставляйте никакой личной информации. DOSY не несет ответственности за содержание вашей отправки.
                </Typography>

                {/* <Grid
                        container
                        spacing={2}
                        xl={8}
                    >
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel>Результаты</InputLabel>
                                <Select
                                    value={age}
                                    label="Результаты"
                                    onChange={handleC}
                                >
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={4}>
                            <TextField label="Имя" variant="outlined" />
                        </Grid>

                        <Grid item xs={4}>
                            <Slider
                                getAriaLabel={() => 'Age range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField label="Пол" variant="outlined" />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField label="Город" variant="outlined" />
                        </Grid>
                    </Grid> */}
                {/* </Paper> */}

            </Container>

            {/* ------------------------------------------------------------ */}

            {/* <footer>я футер</footer> */}


        </div >
    )
}


export default Main