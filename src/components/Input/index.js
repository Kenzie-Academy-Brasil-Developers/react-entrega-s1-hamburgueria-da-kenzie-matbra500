import { useState } from "react";
import "./style.css";

function Input({ callback }) {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="container-input">
      <input
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        onFocus={() => setUserInput("")}
        placeholder="Search"
      ></input>
      <button className="search-button" onClick={() => callback(userInput)}>
        Pesquisar
      </button>
    </div>
  );
}

export default Input;
