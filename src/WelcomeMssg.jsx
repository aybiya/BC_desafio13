const WelcomeMessage = (props) => {

  const createMssg = () => {
    if (!props.nombre || !props.edad) {
      props.setMssg('Por favor, completa todos los datos requeridos');
    } else if (props.edad < 18) {
      props.setMssg(`Hola ${props.nombre}, eres muy joven para usar esta aplicación`);
    } else {
      props.setMssg(`Bienvenido ${props.nombre}, gracias por usar nuestra aplicación`);
    }
  };

  return (
    <div>
      <button onClick={createMssg}>Aceptar</button>
      <p>{props.message}</p>
    </div>
  );
  
};

export default WelcomeMessage;