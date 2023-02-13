function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.myFunction}
      className={props.className}
      value={props.value}
    />
  );
}

export default Input;
