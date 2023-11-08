import { useState } from "react";
import "./App.css";


function App() {
  const [user, setUser] = useState({ nombre: '', edad: '', mensaje: '' });
  
  const handleNameChange = (event) => {
    setUser({ ...user, nombre: event.target.value });
  };

  const handleAgeChange = (event) => {
    setUser({ ...user, edad: parseInt(event.target.value) });
  };

  const createMssg = () => {
    if (user.nombre.trim() === '' || user.edad === '') {
      // Verificar que los campos requeridos esten completos
      setUser({ ...user, mensaje: 'Por favor, completa todos los datos requeridos' });
    } else {
      if (user.edad < 18) {
        setUser({ ...user, mensaje: `Hola ${user.nombre}, eres muy joven para usar esta aplicación` });
      } else {
        setUser({ ...user, mensaje: `Bienvenido ${user.nombre}, gracias por usar nuestra aplicación` });
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