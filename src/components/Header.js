import AddButton from "./AddButton";

const Header = ({ title }) => {
  const habits = [];

  const onClick = () => {
    console.log("btnClick");
    habits.push("h");
  };

  return (
    <header>
      <h1>{title}</h1>
      <AddButton onClick={onClick}></AddButton>
    </header>
  );
};

Header.defaultProps = {
  title: "Habit Tracker"
};

export default Header;
