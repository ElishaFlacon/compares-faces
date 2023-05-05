import React, { useState } from 'react'
import axios from 'axios';
import { IconButton, Button, Switch, Container, Stack, Typography, Box, Paper, Grid, Slider, TextField, FormControl, Select, MenuItem, InputLabel, Card } from '@mui/material';


function Main() {

    // const [value, setValue] = useState([0, 100]);
    // const [age, setAge] = useState();

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // const handleC = (event) => {
    //     setAge(event.target.value);
    // };


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

        setChoto(data.map((person) => {
            console.log(person);

            return (
                <Card
                    raised
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        padding: '12px',

                        textAlign: 'start',
                        alignItems: 'flex-start',
                    }}
                >

                    <img className='testimg' src={`http://localhost:5000/get_image?name=${person[1]}`} alt=" " />

                    <Typography>
                        ИМЯ: {person[0][0][1]}
                    </Typography>

                    <Typography>
                        ВОЗРАСТ: {person[0][0][2]}
                    </Typography>

                    <Typography>
                        ПОЛ: {person[0][0][3]}
                    </Typography>

                    <Typography>
                        ОПИСАНИЕ: {person[0][0][4]}
                    </Typography>
                </Card>
            );
        }))
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

                            onClick={yahzkaknazvattibya}
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

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        gap: '24px',
                    }}
                >
                    {cheto}
                </Box>

            </Container>

            {/* ------------------------------------------------------------ */}

            {/* <footer>я футер</footer> */}


        </div >
    )
}


export default Main