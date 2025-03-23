import React, { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";


const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		if (text.trim() === "") return;
		setTodos([...todos, { text, completed: false }]);
	};

	const deleteTodo = (indexToDelete) => {
		setTodos(todos.filter((_, index) => index !== indexToDelete));
	};

	return (
		<div className="app-container">
			<TodoHeader />
			<div className="todo-box">
				<TodoInput onAdd={addTodo} />
				<TodoList todos={todos} onDelete={deleteTodo} />
				<TodoFooter count={todos.length} />
			</div>
		</div>
	);
};


export default App;
