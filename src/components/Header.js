import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        text={showAdd ? "close" : "add"}
        color={showAdd ? "red" : "lightgreen"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Habit Tracker"
};

export default Header;
