import TextField from '@material-ui/core/TextField';
import React, { FormEvent, useState } from 'react';

const SearchForm = (): JSX.Element => {
    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSearchInput('Submitted!');
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
