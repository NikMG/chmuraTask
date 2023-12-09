import axios from 'axios';
import React, { useState } from 'react';

const CreateModal = ({ isOpen, setOpen, fetchTasks}) => {

    let [taskInput, setTaskInput] = useState('');

    let handleInput = (event) => {
        setTaskInput(event.target.value);
    }

    let handleCreate = async () => {
        await axios.post('https://api.nikmg.weazzylee.me/tasks/create', {
            task: taskInput
        });

        await fetchTasks();

        setOpen(false);
        setTaskInput('');
    } 

    return (
      <>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 className="modal-title">Create task</h2>
              <input value={taskInput} onChange={handleInput} type="text" placeholder="Task name" className="modal-input" />
              <button className="modal-button" onClick={() => { setOpen(false) }}>Close</button>
              <button className="modal-button" onClick={handleCreate}>Create</button>
            </div>
          </div>
        )}
      </>
    );
  };

  export default CreateModal;