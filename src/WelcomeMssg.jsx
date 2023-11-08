const WelcomeMessage = (props) => {
  const WelcomeMessg = (message) => {
    props.setMssg(message);
  }
return (
  <div>
    <p>{props.message}</p>
  </div>
);
}

export default WelcomeMessage;