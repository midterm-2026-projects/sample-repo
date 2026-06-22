import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TaskList from '../components/TaskList';


describe('TaskList', () =>{
    it('should renders No task yet', () =>{
        const data = [];
        render(<TaskList tasks={data} />);

        const result = screen.getByText('No tasks yet');

        expect(result).toBeInTheDocument();
    });

    it('should renders the items in the list', () =>{
        const data = ['Do Grocery', 'Do Laundry'];
        render(<TaskList tasks={data} />);

        const result = screen.getAllByRole('listitem');

        expect(result).toHaveLength(2);
        expect(result[0]).toHaveTextContent('Do Grocery');
        expect(result[1]).toHaveTextContent('Do Laundry');
    });

})