import axios from "axios";
import { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";

const ListComponent = () => {

    let [taskList, setTasks] = useState();
    let [isOpenCreateModal, setOpenCreateModal] = useState(false);
    let [isOpenUpdateModal, setOpenUpdateModal] = useState(false);
    let [activeTask, setActiveTaks] = useState();

    let handleUpdateTask = async (task) => {
        setActiveTaks(task);

        setOpenUpdateModal(true);
    }

    let fetchTaskList = async () => {
        const taskList = await axios.get('http://16.170.231.118:3001/api/tasks');

        setTasks(taskList.data);
    }

    let handleDeleteTask = async (task) => {
        await axios.delete(`http://16.170.231.118:3001/api/tasks/delete/${String(task.id)}`);

        await fetchTaskList();
    }

    useEffect(() => {
        fetchTaskList();
    }, []);

    return (
        <div className="list">
            <CreateModal isOpen={isOpenCreateModal} setOpen={setOpenCreateModal} fetchTasks={fetchTaskList}/>
            {activeTask ? <UpdateModal isOpen={isOpenUpdateModal} setOpen={setOpenUpdateModal} activeTask={activeTask} fetchTasks={fetchTaskList} /> : '' }
            <div className="buttons">
                <span className="create__button button" onClick={() => {setOpenCreateModal(true)}}>Create</span>
                <span className="refresh__button button" onClick={fetchTaskList}>Refresh</span>
            </div>
            <div className="tasks">
                { taskList ? taskList.map((item, index) => {
                    return <div key={index} className="task__item"> 
                        <span className="task__item--name">{item.task}</span>
                        <span className="task__item--update button" onClick={() => { handleUpdateTask(item) }}>Update</span>
                        <span className="task__item--delete button" onClick={() => { handleDeleteTask(item) }}>Delete</span>
                    </div>
                }) : ''}
            </div>
        </div>
    )
}

export default ListComponent;