import { useState } from "react";
import ToDoItems from './todoitems.js'

function ToDoList(){
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);

    function addTask(event){
        event.preventDefault(); 

        if(task.trim()!=''){
            const newTask={
                key:Date.now(),
                task:task
            }
            setTaskItems(prevTasks=>([...prevTasks,newTask]));
        }
        setTask('');
        event.target.task.focus();  

    }

    function removeTask(key){
        if(key!=''){
            setTaskItems(prevTaskItem=>prevTaskItem.filter(task=>task.key!=key));
        }
    }

    return(
        <>
            <form onSubmit={addTask}>
                <label htmlFor="task">Task?</label>
                <input type="text" autoFocus name="task" id="task" 
                value={task||''} 
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Enter a task"/>
                <button type="submit">Add</button>
            </form>
            <ToDoItems items ={taskItems} remove={removeTask}/>
        </>
    )
}
export default ToDoList;