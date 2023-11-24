import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), text, category };
    onTaskFormSubmit(newTask);
    setText('');
    setCategory(categories[0]);
  };

  return (
    <div>
      <h2>New Task Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
