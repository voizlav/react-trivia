import Button from "./Button";

export default ({ categories, handlerPick }) => {
  return categories.map((category) => {
    return (
      <Button
        key={category}
        label={category}
        handler={handlerPick(category)}
        param={category}
      />
    );
  });
};
