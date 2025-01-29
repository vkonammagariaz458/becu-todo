import styles from './update-todo.component.module.scss';
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { TodoService } from "../../service/todo.service";
import { Status, TodoModel } from '../../model/todo';
import React from 'react';
interface UpdateToDoProps{
    todomodel: TodoModel;
    onClose: (()=> void);
}

export const UpdateTodoComponent = (props: UpdateToDoProps) => {
    const [todoObj, setTodoObj] = useState<TodoModel>(props.todomodel);
    const statusUIText = {
            [Status.NOTSTARTED]: "Not Started",
            [Status.PENDING]: "Pending",
            [Status.COMPLETED]: "Completed"
    };

    const handleClose = ()=>{
        console.log('closing modal');
        props.onClose();
    }

    const updateTodoItem = () => {
        TodoService.updateTodoItem(todoObj).then(response => {
            props.onClose();
        });
    }

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setTodoObj({...todoObj, status: e.target.value as Status})
    }

    return <div className={`${styles.updateTodoContainer}`}>
        <Modal show={true} onHide={props.onClose} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.todomodel.description}
                <Form>
                    <Form.Group className="mb-3" controlId="todoeditform.status">
                        <Form.Label>Status</Form.Label>
                        <Form.Select value={todoObj.status} aria-label="todostatus" onChange={handleStatusChange}>
                            <option>status</option>
                            <option value={Status.NOTSTARTED}>{statusUIText[Status.NOTSTARTED]}</option>
                            <option value={Status.PENDING}>{statusUIText[Status.PENDING]}</option>
                            <option value={Status.COMPLETED}>{statusUIText[Status.COMPLETED]}</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" data-testid="close-btn" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" data-testid="save-btn" onClick={updateTodoItem}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>
    </div>;
}