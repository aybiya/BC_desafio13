import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMssg";


function App() {
  const [nombre, setName] = useState('');
  const [edad, setAge] = useState('');
  const [mensaje, setMssg] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(parseInt(event.target.value));
  };
 
  return (
    <section>
      <h1>Hola!</h1>
      <article>
        <div>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" value={nombre} placeholder="Nombre" onChange={handleNameChange}/>
        </div>
        <div>
        <label htmlFor="age">Edad: </label>
        <input type="number" id="age" value={edad} placeholder="Edad" onChange={handleAgeChange}/>
        </div>
        <WelcomeMessage message={mensaje} nombre={nombre} edad={edad} setMssg={setMssg} />
      </article>
    </section>
  );
}

export default App;