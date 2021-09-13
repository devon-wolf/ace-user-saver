import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import UserSaver from './pages/UserSaver';

it('renders a search bar and accepts input', () => {
    render(<UserSaver />);
    const searchBar = screen.getByLabelText('user search');
    fireEvent.change(searchBar, { target: { value: 'devon-wolf' }});
});
