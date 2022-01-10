import Habit from "./Habit";

const Habits = ({ habits, onDelete }) => {
  return (
    <div>
      {habits.map((h) => {
        return <Habit key={h.id} habit={h} onDelete={onDelete}></Habit>;
      })}
    </div>
  );
};
export default Habits;
