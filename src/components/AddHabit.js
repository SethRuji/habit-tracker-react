import { useState } from "react";

const AddHabit = ({ onAdd }) => {
  const noFrequency = {
    M: false,
    T: false,
    W: false,
    TH: false,
    F: false,
    Sa: false,
    Su: false
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);
  const [frequency, setFrequency] = useState(noFrequency);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a habit");
      return;
    }

    onAdd({ name, description, reminder, frequency });

    setName("");
    setDescription("");
    setReminder(false);
    setFrequency(noFrequency);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Create a new Habit</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Reminder</label>
      <input
        name="reminder"
        type="checkbox"
        value={reminder}
        checked={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
      />

      <p>Frequency</p>
      {["Su", "M", "T", "W", "Th", "F", "Sa"].map((day) => {
        return (
          <div key={day}>
            <label>{day}</label>
            <input
              type="checkbox"
              name={day}
              value={frequency[day]}
              checked={frequency[day]}
              onChange={(e) =>
                setFrequency({
                  ...frequency,
                  [day]: e.currentTarget.checked
                })
              }
            />
          </div>
        );
      })}

      <button type="submit">Create Habit</button>
    </form>
  );
};

export default AddHabit;
