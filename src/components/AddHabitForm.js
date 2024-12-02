import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (event) => {
    // TODO: write code to handle form submission
    event.preventDefault();
  
    if (!habitName) return;

    const newHabbit = {
      id: Date.now(),
      habitName,
      completed: false,
    };

    onAddHabit(newHabbit);
    setHabitName("");
  }


  return (
    //TODO: add a form to add a new habit
    <form className="add-habit-form" onSubmit={handleSubmit}>
    <input 
      type="text"
      placeholder="New Habit"
      value={habitName}
      onChange={(e) => setHabitName(e.target.value)}
    />
    <button type="submit">Add Habit</button>
    </form>
  );
  };
