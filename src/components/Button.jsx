export default ({ label, handler }) => {
  return <button onClick={() => handler(label)}>{label}</button>;
};
