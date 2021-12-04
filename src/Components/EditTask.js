import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../Redux/Action';
import { Button,Modal,FormControl } from 'react-bootstrap';

function EditTask({task}) {
  const dispatch = useDispatch();
  const [editTodo,setEditTodo] = useState(task.description);
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const edit = () => {
    dispatch (editTask(task.id,editTodo));
    handleClose(); 
  }

    return(
    <div>
      <Button style={{width:"150px",height:"62px"}} variant="primary" onClick={handleShow}>
        Edit the Task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing the Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Add a Task"
            aria-label="Add a Task"
            aria-describedby="basic-addon2"
            value = {editTodo}
            onChange = {e => setEditTodo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
}
export default EditTask;