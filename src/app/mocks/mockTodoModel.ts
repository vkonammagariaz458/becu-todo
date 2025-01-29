import { Status, TodoModel } from "../model/todo";

export const mockTodoModel: TodoModel[] = [{
    id: '1',
    description: 'task1',
    status: Status.NOTSTARTED,
    createddate: '2025-27-01',
    createdby: 'TestUser',
    modifieddate: '2025-27-01'
},
{
    id: '2',
    description: 'task2',
    status: Status.NOTSTARTED,
    createddate: '2025-23-01',
    createdby: 'TestUser',
    modifieddate: '2025-23-01'
},
{
    id: '3',
    description: 'task3',
    status: Status.PENDING,
    createddate: '2025-24-01',
    createdby: 'TestUser',
    modifieddate: '2025-24-01'
},
{
    id: '4',
    description: 'task4',
    status: Status.COMPLETED,
    createddate: '2025-25-01',
    createdby: 'TestUser',
    modifieddate: '2025-25-01'
}]