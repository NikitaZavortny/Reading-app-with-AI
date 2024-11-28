import { useState, useEffect } from 'react';
import axios from "axios";

const KandinskyComponent = () => {

    const [prompt, setPrompt] = useState();
    const [imageUrl, setImageUrl] = useState('');

    const $api = axios.create({
        baseURL: "http://127.0.0.1:8000"
    })

    const fetchapi = async () => {
        const text = prompt
        const s = (await $api.post('/gen', { text })).data.base.images[0]
        console.log(s)
        setImageUrl(s);
    };

    return (
        <div>
            {imageUrl ? (
                <img src={`data:image/jpeg;base64,${imageUrl}`} />
            ) : (
                <p>Изображение загружается...</p>
            )}

            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} />
            <button onClick={fetchapi}>Make picture</button>
        </div>
    );
};

export default KandinskyComponent;