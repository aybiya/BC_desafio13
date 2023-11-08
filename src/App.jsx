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

  const createMssg = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página
    if (nombre.trim() === '' || edad === '') {
      // Verificar que los campos requeridos esten completos
      setMssg('Por favor, completa todos los datos requeridos' );
    } else {
      if (edad < 18) {
        setMssg(`Hola ${nombre}, eres muy joven para usar esta aplicación`);
      } else {
        setMssg(`Bienvenido ${nombre}, gracias por usar nuestra aplicación`);
      }
    }
  };

 
  return (
    <section>
      <h1>Hola!</h1>
      <form>
        <div>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" value={nombre} placeholder="Nombre" onChange={handleNameChange}/>
        </div>
        <div>
        <label htmlFor="age">Edad: </label>
        <input type="number" id="age" value={edad} placeholder="Edad" onChange={handleAgeChange}/>
        </div>
        <button onClick={createMssg}>Aceptar</button>
      </form>
        <WelcomeMessage message={mensaje} />
    </section>
  );
}

export default App;