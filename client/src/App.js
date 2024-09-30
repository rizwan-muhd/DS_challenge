import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("here", state);
    try {
      const res = await axios.post("http://localhost:8080/upload", { state });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
