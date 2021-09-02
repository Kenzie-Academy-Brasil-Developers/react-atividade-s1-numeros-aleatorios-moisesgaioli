import './App.css';
import { useState } from "react";

function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {

    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">

      <div className="number">{number}</div>
      <button className="button" onClick={randomNumber}>Gerar número aleatório</button>
      
    </div>
  );
}

export default App;
