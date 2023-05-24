import Button from "./Button";

export default ({ categories, handlerCategory }) => {
  return categories.map((category) => {
    return (
      <Button
        key={category}
        label={category}
        handler={() => handlerPick(category)}
      />
    );
  });
};
