import Button from "./Button";

export default ({ categories, handler }) => {
  return categories.map((category) => {
    return <Button key={category} label={category} handler={handler} />;
  });
};
