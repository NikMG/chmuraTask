import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UpdateModal = ({ isOpen, setOpen, activeTask, fetchTasks }) => {

    let [taskInput, setTaskInput] = useState('');

    let handleInput = (event) => {
        setTaskInput(event.target.value);
    }

    let handleUpdate = async () => {
        await axios.put('http://16.170.231.118:3001/tasks/update', {
            taskId: activeTask.id,
            text: taskInput
        });

        setOpen(false);
        await fetchTasks();
    }

    useEffect(() => {
        setTaskInput(activeTask.task);
    }, [activeTask])

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Update task</h2>
            <input value={taskInput} onChange={handleInput} type="text" placeholder="Task name" className="modal-input" />
            <button className="modal-button" onClick={() => { setOpen(false) }}>Close</button>
            <button className="modal-button" onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateModal;