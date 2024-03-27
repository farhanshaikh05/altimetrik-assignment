import React from 'react';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Task List</h5>
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-0">{task.title}</h6>
                <p className="mb-1">{task.description}</p>
                <small className="text-muted">Due Date: {task.dueDate}</small>
                <br />
                <small>Status: {task.status}</small> {/* Display status */}
              </div>
              <div>
                <button type="button" className="btn btn-success me-2" onClick={() => onUpdateTask(task.id, { ...task, status: 'completed' })}>Mark as Completed</button>
                <button type="button" className="btn btn-danger" onClick={() => onDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
