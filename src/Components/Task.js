import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ListGroup,Button } from 'react-bootstrap';
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask,completeTask } from '../Redux/Action';
import EditTask from './EditTask';

function Task ({task}){
    const dispatch = useDispatch();

    return(
        <ListGroup>
            <ListGroup.Item style={{textDecoration: task.isDone && "line-through"}}> 
            {task.description}
            </ListGroup.Item>
            <div style={{width:"150px", display:"flex",flexWrap:"nowrap"}}    >
            <Button  variant="success" onClick= {()=> dispatch(completeTask(task.id))}>
                { task.isDone ? "Undone" : "Done" }
                <IoCheckmarkDoneCircleOutline/>
            </Button>
            <EditTask task= {task} />
            <Button variant="danger" onClick= {()=> dispatch(deleteTask(task.id))}>Delete
                <AiOutlineCloseCircle/>
            </Button>
            </div>
        </ListGroup>
    );
}

export default Task;