import React from 'react';
import { render, screen } from '@testing-library/react';
import UserSaver from './pages/UserSaver';
import userEvent from '@testing-library/user-event';

it('renders a search bar and accepts input', () => {
    render(<UserSaver />);
    const searchBar = screen.getByLabelText('user search');
    userEvent.type(searchBar, 'devon-wolf');
    userEvent.type(searchBar, '{enter}');

    expect(searchBar).toHaveValue('Submitted!');
});
