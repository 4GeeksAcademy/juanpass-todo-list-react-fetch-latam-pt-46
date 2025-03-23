import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
	return (
		<ul className="todo-list">
			{todos.map((todo, index) => (
				<TodoItem
					key={index}
					text={todo.text}
					onDelete={() => onDelete(index)}
				/>
			))}
		</ul>
	);
};

export default TodoList;
