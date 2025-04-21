import { useState, useEffect } from 'react';
import axios from "axios";

const QuestionsComponent = () => {

    const [prompt, setPrompt] = useState("");
    const [quest, setQuest] = useState('');
    const [isloading, setIsLoading] = useState(false);

    const $api = axios.create({
            baseURL: "http://127.0.0.1:8000"
        })
    
    const fetchapi = async () => {
        const text = prompt
        setIsLoading(true);
        console.log("хуярим1")
        const s = (await $api.post('/question', { text })).data.base.choices[0].message.content
        console.log("хуярим")
        console.log(s)
        setQuest(s);
        setIsLoading(false);
    };

    return (
        <div>
            {isloading ? (
                <p>Вопросы загружаются...</p>
            ) : (
                <></>
            )}

            {quest != '' ? (
                quest
            ) : (
                <></>
            )}

            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} />
            <button onClick={fetchapi}>рассказать</button>
        </div>
    );
};

export default QuestionsComponent;

