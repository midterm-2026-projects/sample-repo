import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import AddTaskForm from '../components/AddTaskForm';

describe('AddTaskForm', () =>{
    let input;
    let button;
    const handleAddTask = vi.fn();

    beforeEach(() =>{
        render(<AddTaskForm onAddTask={handleAddTask} />);
        input = screen.getByRole('textbox', {name: /new task/i});
        button = screen.getByRole('button', {name: /create/i});
    });

    it('should renders an input field with empty string value', () =>{
        expect(input).toHaveValue('');
    });

    it('should renders a submit button', () =>{
        expect(button).toBeInTheDocument();
    });

    it('should updates the input value as the user types', async () =>{
        const user = userEvent.setup();

        await user.type(input, 'New Task 1');

        expect(input).toHaveValue('New Task 1');
    });

    it('should reset the value of the input field when the form is submitted', async () =>{
        const user = userEvent.setup();
        await user.type(input, 'New Task 1');
        await user.click(button);

        expect(input).toHaveValue('');
    });

    it('should call onAddTask with the typed value when the form is submitted', async () =>{
        const user = userEvent.setup();

        await user.type(input, 'New Task 1');
        await user.click(button);

        expect(handleAddTask).toHaveBeenCalledWith('New Task 1');
    })
})