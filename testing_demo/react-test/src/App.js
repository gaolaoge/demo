import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { TodoDemo } from "./TodoDemo";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />

        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
        <p>Hello {name}</p>
        <TodoDemo />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
