import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTasks() {
    const [taskDone,setTaskDone] = useState(false);
    const [filter,setFilter] = useState(false);
    const tasks = useSelector((state) => state.tasks);
    return(
        <> 
            <Button style={{background:"transparent", border:"none", color:"grey"}} 
                    onClick= {() => setFilter(false) }>
                        All Tasks
            </Button>
            <Button style={{background:"transparent", border:"none", color:"grey"}} 
                    onClick= {() => { setTaskDone(true) ; setFilter(true) }}>
                        Done
            </Button>
            <Button style={{background:"transparent", border:"none", color:"grey"}} 
                    onClick= {() => {setTaskDone(false) ; setFilter(true)}}>
                        Not Done Yet
            </Button>
            <br/><br/><br/>
            {
                    taskDone && filter ? tasks.filter(el => el.isDone).map(task => <Task task={task} key= {task.id} />)
               :   !taskDone && filter ? tasks.filter(el => !el.isDone).map(task => <Task task={task} key= {task.id} />)
               :   !filter ? tasks.map(task => <Task task={task} key= {task.id} /> )
               : null 
            }
        </>
        
    );
}
export default ListTasks;