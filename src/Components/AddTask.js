import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Action';
import {InputGroup,FormControl,Button} from 'react-bootstrap';

function AddTask() {
    const dispatch = useDispatch();
    const [todo,setTodo] = useState("");
    
    const add = () => {
        if (todo){
            dispatch(addTask({id: Math.random(), description: todo, isDone: false}));
            setTodo("");
        }
    }
    return(
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Add a Task"
                aria-label="Add a Task"
                aria-describedby="basic-addon2"
                value = {todo}
                onChange = {e => setTodo(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={add}>Add a Task</Button>
        </InputGroup>
    );
}
export default AddTask;