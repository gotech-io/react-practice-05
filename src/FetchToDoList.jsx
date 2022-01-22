import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';

const FetchToDoList = ({ url, showCompleted }) => {
  const [todos, setTodos] = useState();
  const [filteredTodos, setFilteredTodos] = useState();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(url);
      const remoteTodos = await response.json();
      setTodos(remoteTodos);
    };
    fetchTodos();
  }, [url]);

  useEffect(() => {
    if (showCompleted) {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    }
  }, [todos, showCompleted]);

  const handleChange = (id, newState) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: newState };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAdd = (title) => {
    const newTodo = {
      id: Math.max(...todos.map((todo) => todo.id)) + 1,
      title,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <ToDoList todos={filteredTodos} onChange={handleChange} />
      <ToDoInput onAdd={handleAdd} />
    </>
  );
};

export default FetchToDoList;
