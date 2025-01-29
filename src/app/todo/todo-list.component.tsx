"use client";
import React from 'react';
import {  useEffect, useState } from "react";
import { Status, TodoModel } from "../model/todo";
import { TodoService } from "../../app/service";
import styles from "./todo-list.component.module.scss";
import { UpdateTodoComponent } from "./update-todo/update-todo.component";
import { Button, Form } from "react-bootstrap";

interface statusFilter{
    id: number;
    label: string;
    value: Status;
    isSelected: boolean;
}

export const TodoListComponent = ({  }) => {

    const [todoList, setTodoList] = useState<Array<TodoModel>>([]);
    const [filteredTodoList, setFilteredTodoList] = useState<Array<TodoModel>>([]);
    const [editTodoItem, seteditTodoItem] = useState<TodoModel | null>(null);
    const statusUIText = {
        [Status.NOTSTARTED]: "Not Started",
        [Status.PENDING]: "Pending",
        [Status.COMPLETED]: "Completed"
    };

    const [statusFiltersList, setStatusFiltersList] = useState<statusFilter[]>(Object.values(Status).map((status, i) => ({
        id: ++i,
        label: statusUIText[status],
        value: status,
        isSelected: false
    })));

    useEffect(() => {
        loadTodoList();
    }, []);

    useEffect(() => {
        if(todoList?.length > 0){
            loadFilteredTodoList();
        }
    }, [todoList, statusFiltersList]);

    const loadTodoList = () => {
        TodoService.getTodolist().then(response => {
            console.log(response);
            if(response && response.length > 0){
                setTodoList(response);
            }
        });
    }

    const handleEditModelClose = () => {
        seteditTodoItem(null);
        loadTodoList();
    }

    const handleEditTodoItem = (todoObj: TodoModel) => {
        seteditTodoItem(todoObj);
    }
    
    const renderTodoItem = (todoObj: TodoModel, i: number) =>{
        return <div key={todoObj.id} className={`${styles["todo-item-container"]} col-md-6 col-sm-12`}>
            <div className={`${styles["todo-item-border"]}`}>
                <div>
                    <span className={`${styles.description}`}>
                        {++i}. {todoObj.description}
                    </span>
                    
                </div>
                <label className={`${styles["todo-item-label"]}`}>

                    <Button variant="primary" className={`${styles.btnEdit}`} onClick={()=> handleEditTodoItem(todoObj)}>
                        Edit
                    </Button>
                    <span className={`${styles["todo-item-status"]} ${styles["status-"+todoObj.status?.toLowerCase()]}`}>
                        {statusUIText[todoObj.status?.toUpperCase() as Status]}
                    </span>
                </label>
            </div>
        </div>;
    }

    const handleStatusChange = (status: statusFilter) => {
        const updatedFilters = statusFiltersList.map(s=> s.id == status.id ? status: s);
        setStatusFiltersList(updatedFilters);
    }

    const loadFilteredTodoList = () => {
        const selectedStatusList = statusFiltersList.filter(s => s.isSelected).map(s=> s.value);
        const filteredList = selectedStatusList.length == 0? todoList : todoList.filter(i => selectedStatusList.indexOf(i.status.toUpperCase() as Status) != -1);
        setFilteredTodoList(filteredList);
    }

    const renderStatusFilter = () =>{
        
        return <>
            {statusFiltersList.map(s =><span key={s.id}>
                <Form.Check 
                    type="checkbox"
                    label={s.label}
                    checked={s.isSelected}
                    onChange={(e) => handleStatusChange({...s, isSelected: e.target.checked})}
          />
            </span> )}
        </>;
    }

    return (
        <div className={`${styles["todo-list-container"]}  row`}>
            {renderStatusFilter()}
            {filteredTodoList?.map(renderTodoItem)}

            {editTodoItem && <UpdateTodoComponent todomodel={editTodoItem} onClose={handleEditModelClose}/>}
        </div>
      );

};
