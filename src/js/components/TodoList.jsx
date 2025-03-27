import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
    return (
        <ul className="todo-list">
            {todos.length === 0 ? (
                <li className="empty-message">No hay tareas, añadir tareas</li>
            ) : (
                todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        text={todo.text}
                        onDelete={() => onDelete(index)}
                    />
                ))
            )}
        </ul>
    );
};

export default TodoList;