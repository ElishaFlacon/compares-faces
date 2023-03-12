import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {


    const [valueAnswer, setValueAnswer] = useState('...');

    const [valueFirstPicture, setValueFirstPicture] = useState('');
    const [valueSecondPicture, setValueSecondPicture] = useState('');

    const [getFirstPicture, setGetFirstPicture] = useState('');
    const [getSecondPicture, setGetSecondPicture] = useState('');



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
            <div className='form'>
                <div>{valueAnswer}</div>
                <input type="file" onChange={e => setValueFirstPicture(e.target.files)} />
                <input type="file" onChange={e => setValueSecondPicture(e.target.files)} />
                <button onClick={onConfirm}>send</button>
            </div>
        </div>
    );
}


export default App;
