import TextField from '@material-ui/core/TextField';
import React, { FormEvent, useState } from 'react';
import { User } from '../../types';

interface Props {
    onFormSubmit: (user: User) => void;
}

const SearchForm = ({ onFormSubmit }: Props): JSX.Element => {
    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO make a fetch and munge the data
        const newUser = {
            login: 'fake',
            id: 12345,
            url: 'fake',
            name: 'fake',
            public_repos: 1,
            public_gists: 1,
            followers: 1,
            following: 1,
            created_at: 'fake'
        };

        onFormSubmit(newUser);
        setSearchInput('');
    };

    return (
        <form aria-label="search form" onSubmit={handleFormSubmit}>
            <TextField 
                placeholder="Enter username"
                inputProps={{ 'aria-label': 'user search' }}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
        </form>  
    );
};

export default SearchForm;
