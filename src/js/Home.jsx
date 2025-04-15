import React, { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

const BASE_URL_USERS = "https://playground.4geeks.com/todo/users";
const BASE_URL_TODOS = "https://playground.4geeks.com/todo/todos";
const BASE_URL_TAREAS = "https://playground.4geeks.com/todo/users/"
const USER_NAME = "juanpass";

const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                // Verificar si el usuario existe
                const userResponse = await fetch(`${BASE_URL_USERS}/${USER_NAME}`);
                if (userResponse.status === 404) {
                    // Crear usuario si no existe
                    await fetch(`${BASE_URL_USERS}/${USER_NAME}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name: USER_NAME, id: 0 }),
                    });
                } else if (!userResponse.ok) {
                    throw new Error("Error al verificar el usuario");
                }
    
                // Obtener tareas del usuario
                const response = await fetch(`${BASE_URL_USERS}/${USER_NAME}`);
                if (!response.ok) throw new Error("Error al obtener las tareas del usuario");
                const userData = await response.json();
                setTodos(userData.todos); // Extraer el array 'todos' de la respuesta
            } catch (error) {
                console.error("Error al cargar tareas:", error);
            }
        };
        loadTodos();
    }, []);

    // Agregar una nueva tarea
	const addTodo = async (text) => {
        if (text.trim() === "") return;
        try {
            const response = await fetch(`https://playground.4geeks.com/todo/todos/juanpass`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ label: text, is_done: true, id:0 }), // Estructura correcta para la tarea
            });
            if (!response.ok) throw new Error("Error al crear la tarea");
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        } catch (error) {
            console.error("Error al agregar tarea:", error);
        }
    };

	// Eliminar una tarea
const handleDeleteTodo = async (todoId) => {
    try {
        const response = await fetch(`${BASE_URL_TODOS}/${todoId}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar la tarea");
        setTodos(todos.filter((todo) => todo.id !== todoId));
    } catch (error) {
        console.error("Error al eliminar tarea:", error);
    }
};

    return (
        <div className="app-container">
            <TodoHeader />
            <div className="todo-box">
                <TodoInput onAdd={addTodo} isEmpty={todos.length === 0} />
                <TodoList todos={todos} onDelete={handleDeleteTodo} />
                <TodoFooter count={todos.length} />
            </div>
        </div>
    );
};

export default Home;