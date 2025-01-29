import React from 'react';
import {act, fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import { UpdateTodoComponent } from './update-todo.component';
import { mockTodoModel } from '../../mocks/mockTodoModel';

describe('update todo component', () => {
    const props = {
        onClose: jest.fn(),
        todomodel: mockTodoModel[0]
    }
    test('render without error' ,() => {
        act(() => {
            /* fire events that update state */
            render(<UpdateTodoComponent {...props}/>);
        });
        expect(screen.getByText("Not Started")).toBeInTheDocument();
        expect(screen.getByText("task1")).toBeInTheDocument();
        expect(screen.getByTestId("close-btn")).toBeInTheDocument();
        expect(screen.getByTestId("save-btn")).toBeInTheDocument();
    });

    test('should close modal on click of close button' ,async() => {
        
        act(() => {
            /* fire events that update state */
            render(<UpdateTodoComponent {...props}/>);
        });
        expect(screen.getByText("Not Started")).toBeInTheDocument();
        expect(screen.getByText("task1")).toBeInTheDocument();
        expect(screen.getByTestId("close-btn")).toBeInTheDocument();
        expect(screen.getByTestId("save-btn")).toBeInTheDocument();
        const closeBtn = screen.getByTestId("close-btn");
        fireEvent.click(closeBtn);
    });

    test('should load pending task' ,async() => {
        const pendingTaskProps = {
            onClose: jest.fn(),
            todomodel: mockTodoModel[2]
        }
        act(() => {
            /* fire events that update state */
            render(<UpdateTodoComponent {...pendingTaskProps}/>);
        });
        expect(screen.getByText("Pending")).toBeInTheDocument();
        expect(screen.getByText("task3")).toBeInTheDocument();
        expect(screen.getByTestId("save-btn")).toBeInTheDocument();
    });
});