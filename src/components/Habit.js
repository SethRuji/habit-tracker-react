import { FaTimes } from "react-icons/fa";

const Habit = ({ habit, onDelete }) => {
  return (
    <div>
      <h3>
        {habit.name}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(habit.id)}
        />
      </h3>
    </div>
  );
};

export default Habit;
