import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {


    const defaultImg = 'https://cdn-icons-png.flaticon.com/512/3973/3973425.png';
    const loadImg = 'https://cdn-icons-png.flaticon.com/512/4146/4146794.png';
    const compareImg = 'https://cdn-icons-png.flaticon.com/512/5261/5261936.png';

    const [valueAnswer, setValueAnswer] = useState('...');

    const [valueFirstPicture, setValueFirstPicture] = useState('');
    const [valueSecondPicture, setValueSecondPicture] = useState('');

    const [getFirstPicture, setGetFirstPicture] = useState(defaultImg);
    const [getSecondPicture, setGetSecondPicture] = useState(defaultImg);

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setGetFirstPicture(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const imageHandler2 = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setGetSecondPicture(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const onConfirm = async () => {
        const formData = new FormData();
        formData.append('first_pic', valueFirstPicture[0]);
        formData.append('second_pic', valueSecondPicture[0]);
        const a = await axios.post('http://localhost:5000/api/post/face-verify', formData);
        console.log(a.data[0])
        setValueAnswer(String(a.data[0]));
    }


    return (
        <div className="App">
            <div className='pre-img-container'>
                <div className='pre-img-box'>
                    <img src={getFirstPicture} alt="" className='pre-img' />

                    <label class="input-file">
                        <input type="file" name="file" onChange={e => { setValueSecondPicture(e.target.files); imageHandler(e) }} />
                        <div class="input-file-btn">
                            <img className='load-img' src={loadImg} alt="" />
                        </div>
                    </label>
                </div>


                <div className='answer'>{valueAnswer}</div>


                <div className='pre-img-box'>
                    <img src={getSecondPicture} alt="" className='pre-img' />

                    <label class="input-file">
                        <input type="file" name="file" onChange={e => { setValueFirstPicture(e.target.files); imageHandler2(e) }} />
                        <div class="input-file-btn">
                            <img className='load-img' src={loadImg} alt="" />
                        </div>
                    </label>
                </div>
            </div>


            <button onClick={onConfirm}>
                <h1>
                    сравнить
                </h1>
                <img className='compare-img' src={compareImg} alt="send" />
            </button>
        </div>
    );
}


export default App;
