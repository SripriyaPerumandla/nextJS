'use client'
import { useState, useEffect } from 'react';

export default function Page() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleAddTask = async () => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask, completed: false }),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    setNewTask('');
  };

  const handleDeleteTask = async id => {
    await fetch('/api/tasks', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleUpdateTask = async (id, completed) => {
    await fetch('/api/tasks', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title: 'Updated Task', completed: !completed }),
    });
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title: 'Updated Task', completed: !completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleUpdateTask(task.id, task.completed)}
            />
            <span>{task.title}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
