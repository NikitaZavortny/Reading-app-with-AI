import { useState, useEffect } from 'react';
import axios from "axios";

const KandinskyComponent = () => {

    const [prompt, setPrompt] = useState();
    const [imageUrl, setImageUrl] = useState('');
    const [isloading, setIsLoading] = useState(false);

    const $api = axios.create({
        baseURL: "http://127.0.0.1:8000"
    })

    const fetchapi = async () => {
        const text = prompt
        setIsLoading(true);
        const s = (await $api.post('/gen', { text })).data.base.images[0]
        console.log(s)
        setImageUrl(s);
        setIsLoading(false);
    };

    return (
        <div>
            {isloading  ? (
                <p>Изображение загружается...</p>
            ) : (
                <></>
            )}

            {imageUrl != '' ? (
                <img src={`data:image/jpeg;base64,${imageUrl}`}></img>
            ) : (
                <></>
            )}

            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} />
            <button onClick={fetchapi}>Сделать изображение</button>
        </div>
    );
};

export default KandinskyComponent;
