import React from "react";

const TodoFooter = ({ count }) => {
	return <div className="todo-footer">{count} item{count !== 1 ? "s" : ""} left</div>;
};

export default TodoFooter;
