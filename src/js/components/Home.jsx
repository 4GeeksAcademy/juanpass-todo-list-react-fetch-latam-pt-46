import React from "react";
import './index.css'


import Header from "./TodoHeader";
import Input from "./TodoInput";
import List from "./TodoList";
import Footer from "./TodoFooter";


const Home = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		if (text.trim() === "") return;
		setTodos([...todos, { text, completed: false }]);
	};

	return (
		<div className="app-container">
			<Header />
			<div className="todo-box">
				<Input onAdd={addTodo} />
				<List todos={todos} />
				<Footer count={todos.length} />
			</div>
		</div>
	);
};

export default Home;