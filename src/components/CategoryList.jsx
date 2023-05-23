import Button from "./Button";

export default ({ categories }) => {
  return categories.map((category) => {
    return <Button key={category} label={category} />;
  });
};
