import React from 'react';
import { render, screen } from '@testing-library/react';
import UserSaver from './pages/UserSaver';

it('renders a search bar', () => {
    render(<UserSaver />);
    screen.getByLabelText('user search');
});
