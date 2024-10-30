import { FunctionComponent, useState, useRef } from "react";
import {ReactReader} from "react-reader";
import axios from "axios";

const App = () => {

  const [summed, setSummed] = useState("asd");
  const [origText, setText] = useState("");
  const [power, setPower] = useState(5);
  const $api = axios.create({
    baseURL: "http://127.0.0.1:8000"
  })

  const fetchapi = async()=>{
    const text = origText
    const s = (await $api.post('/', { text, power })).data.text
    setSummed(s);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ReactReader url={"book.epub"}/>
      <textarea value={origText} onChange={e=>setText(e.target.value)}></textarea>
      <input type="number" value={power} onChange={e => setPower(e.target.value)} />
      <button onClick={fetchapi}>Make a short summarise</button>

      <p>{summed}</p>
    </div>
  );
};

export default App;