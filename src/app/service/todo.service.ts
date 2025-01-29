import axios from "axios";
import { Status, TodoModel } from "../model/todo";

const API_Host_URL = 'https://localhost:44363'; // Replace with your actual API URL
let todolist: TodoModel[] = [
    {
        id:"1",
        description:"first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here first task is here ",
        status:Status.NOTSTARTED,
        createdby: "venkatesh",
        createddate: new Date().toString(),
        modifieddate: new Date().toString()
    },
    {
        id:"2",
        description:"complete this task tomorrow",
        status:Status.PENDING,
        createdby: "venky",
        createddate: new Date().toString(),
        modifieddate: new Date().toString()
    },
    {
        id:"3",
        description:"this task is for nothing.",
        status:Status.COMPLETED,
        createdby: "venky",
        createddate: new Date().toString(),
        modifieddate: new Date().toString()
    },
    {
        id:"4",
        description:"leave this task not.",
        status:Status.PENDING,
        createdby: "venky",
        createddate: new Date().toString(),
        modifieddate: new Date().toString()
    }

];
export class TodoService{

    static async getTodolist(): Promise<Array<TodoModel>> {
        const api_EndPoint = 'api/Task';
        try {
            const response = await axios.get(`${API_Host_URL}/${api_EndPoint}`);
            return response?.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    static async updateTodoItem(updatedItem: TodoModel): Promise<Array<TodoModel>> {
        todolist = [...todolist.map(i=> i.id == updatedItem.id ? {...updatedItem}: i)];
        const api_EndPoint = 'api/Task';
        try {
            var updatedTask = {
                id: updatedItem.id,
                status: updatedItem.status
            };
            const response = await axios.put(`${API_Host_URL}/${api_EndPoint}`, updatedTask);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
        
        return Promise.resolve(todolist);
    }

}