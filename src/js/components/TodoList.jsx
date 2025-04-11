import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
    return (
        <ul className="todo-list">
            {todos.length === 0 ? (
                <li className="empty-message">No hay tareas, añadir tareas</li>
            ) : (
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id} // Usar 'id' como clave única
                        text={todo.label} // Cambiar de 'todo.text' a 'todo.label'
                        onDelete={() => onDelete(todo.id)} // Pasar 'todo.id' para eliminar correctamente
                    />
                ))
            )}
        </ul>
    );
};

export default TodoList;