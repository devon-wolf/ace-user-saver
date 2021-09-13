import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import UserSaver from './pages/UserSaver';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it('renders a search bar', () => {
    render(<UserSaver />);
    const searchBar = screen.getByLabelText('user search');
    expect(searchBar).toBeInTheDocument();
});
