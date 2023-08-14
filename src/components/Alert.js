function Alert(props) {
  return (
    <div className={"alert " + props.alertClassName} role="alert">
      {props.alertMessage}
    </div>
  );
}

export default Alert;
