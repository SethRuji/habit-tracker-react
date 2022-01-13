import Habit from "./Habit";

const Habits = ({ habits, onDelete, onToggle }) => {
  return (
    <div>
      {habits.map((h) => {
        return (
          <Habit
            key={h.id}
            habit={h}
            onDelete={onDelete}
            onToggle={onToggle}
          ></Habit>
        );
      })}
    </div>
  );
};
export default Habits;
