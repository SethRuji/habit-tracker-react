import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Habits from "./components/Habits";
import { useState } from "react";
import AddHabit from "./components/AddHabit";

export default function App() {
  let staticHabits = [
    {
      id: 1,
      name: "every other day",
      description: "first",
      reminder: true,
      frequency: {
        M: true,
        T: false,
        W: true,
        TH: false,
        F: true,
        Sa: false,
        Su: true
      }
    },
    {
      id: 2,
      name: "weekdays",
      description: "2nd",
      reminder: false,
      frequency: {
        M: true,
        T: true,
        W: true,
        TH: true,
        F: true,
        Sa: false,
        Su: false
      }
    },
    {
      id: 3,
      name: "weekends",
      description: "3rd",
      reminder: true,
      frequency: {
        M: false,
        T: false,
        W: false,
        TH: false,
        F: false,
        Sa: true,
        Su: true
      }
    }
  ];

  const [habits, setHabits] = useState(staticHabits);
  const [showAdd, setShowAdd] = useState(false);

  //Delete Habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  //Add Habit
  const addHabit = (habit) => {
    console.log({ habit });
    const id = Math.floor(Math.random() * 10000) + 1;
    const newHabit = { id, ...habit };
    setHabits([...habits, newHabit]);
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    // habits.find(h=>h.id === id)
    setHabits(
      habits.map((h) => (h.id === id ? { ...h, reminder: !h.reminder } : h))
    );
  };

  return (
    <div className="App">
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {showAdd && <AddHabit onAdd={addHabit} />}
      {habits.length > 0 ? (
        <Habits
          habits={habits}
          onDelete={deleteHabit}
          onToggle={toggleReminder}
        />
      ) : (
        "No Habits"
      )}
    </div>
  );
}
