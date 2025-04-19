import React from "react";


const TodoFooter = ({ count, onDeleteAll }) => {
	return (
	<div>
		<div className="todo-footer d-flex justify-content-between">{count} item{count !== 1 ? "s" : ""} left
		{
			// count>0 ?<div className="delete-all"><button className="btn btn-danger" onClick={onDeleteAll}>Delete All</button></div>:null
			count>0 &&
			<div className="delete-all"><button className="btn btn-danger btn-sm" onClick={onDeleteAll}>Delete All</button></div>
		}
		</div>
	</div>
	)
};

export default TodoFooter;
