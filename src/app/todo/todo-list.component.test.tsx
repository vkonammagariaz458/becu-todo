import React from 'react';
import {act, render, screen} from "@testing-library/react";
import { TodoListComponent } from "./todo-list.component";
import '@testing-library/jest-dom';
import axios from 'axios';
import { mockTodoModel } from '../mocks/mockTodoModel';
import { TodoService } from '../service/todo.service';

jest.mock('axios');

//const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('todo list component',() => {
    test('render without error' ,async() => {
        act(() => {
            /* fire events that update state */
            render(<TodoListComponent/>);
        });
       // (axios.get as jest.Mock).mockResolvedValue({data: mockTodoModel});
      // (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({ data: {mockTodoModel} }));
        axios.get = jest.fn().mockResolvedValue(mockTodoModel);
        const result = await TodoService.getTodolist();
        expect(result).toEqual(mockTodoModel);
        expect(screen.getByText("Not Started")).toBeInTheDocument();
        expect(screen.getByText("Pending")).toBeInTheDocument();
        expect(screen.getByText("Completed")).toBeInTheDocument();
    });
});