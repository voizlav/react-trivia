const Button = ({ label, handler }) => {
  return <button onClick={handler}>{label}</button>;
};

export default Button;
