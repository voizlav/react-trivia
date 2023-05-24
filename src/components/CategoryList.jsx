import CButton from "./CButton";

export default ({ categories, handler }) => {
  return categories.map((category) => {
    return <CButton key={category} label={category} handler={handler} />;
  });
};
