import React from 'react';
import { render, screen } from '@testing-library/react';
import UserSaver from './pages/UserSaver';
import userEvent from '@testing-library/user-event';

describe('User saver page', () => {
    beforeEach(() => {
        render(<UserSaver />);
    });

    it('renders a search bar, accepts input, and clears search bar on submit', () => {
        const searchBar = screen.getByLabelText('user search');
    
        userEvent.type(searchBar, 'devon-wolf');
        expect(searchBar).toHaveValue('devon-wolf');

        userEvent.type(searchBar, '{enter}');
        expect(searchBar).toHaveValue('');
    });

    it('renders a list of saved users after at least one successful search', async () => {
        const searchBar = screen.getByLabelText('user search');
        userEvent.type(searchBar, 'devon-wolf');
        userEvent.type(searchBar, '{enter}');

        await screen.findByLabelText('saved users');        
    });
});

