function Button(props) {
  return (
    <button onClick={props.myFunction} className={props.className}>
      {props.label}
    </button>
  );
}

export default Button;
