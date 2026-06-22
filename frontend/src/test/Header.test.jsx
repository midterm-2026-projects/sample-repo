import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../components/Header';

describe('Header', () =>{
    it('should renders a greeting and a default name when username is not provided', () =>{
        render(<Header />);

        const result = screen.getByText('Hello User');

        expect(result).toBeInTheDocument();
    });

    it('should renders a greeting and a user name', () =>{
        const username = 'Juan';
        render(<Header username={username} />);

        const result = screen.getByText('Hello Juan');

        expect(result).toBeInTheDocument();
    });
})