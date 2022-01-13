import { FaClock, FaTimes } from "react-icons/fa";

const Habit = ({ habit, onDelete, onToggle }) => {
  return (
    <div onDoubleClick={() => onToggle(habit.id)}>
      <span>
        <h3>
          {habit.reminder && <FaClock />}
          {habit.name} - {habit.description}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(habit.id)}
          />
        </h3>
      </span>
      <span>
        {Object.keys(habit.frequency).filter((day) => habit.frequency[day])}
      </span>
    </div>
  );
};

export default Habit;
