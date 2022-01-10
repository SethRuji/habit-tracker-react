import { useState } from "react";

const AddHabit = () => {
  const [text, setName] = useState("");

  return (
    <form>
      <div>
        <label>Habit</label>
        <input type="text" placeholder="add habit..." />
      </div>
      <div>
        <label>Complete</label>
        <input type="text" placeholder="add habit..." />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddHabit;
