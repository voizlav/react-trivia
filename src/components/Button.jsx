export default ({ label, handler, param }) => {
  return (
    <button onClick={param ? () => handler(param) : handler}>{label}</button>
  );
};
