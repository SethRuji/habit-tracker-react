import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Habits from "./components/Habits";
import { useState } from "react";
import AddHabit from "./components/AddHabit";

export default function App() {
  const [habits, setHabits] = useState([{ id: 1, name: "habit1" }]);

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddHabit />

      {habits.length > 0 ? (
        <Habits habits={habits} onDelete={deleteHabit} />
      ) : (
        "No Habits"
      )}
    </div>
  );
}
