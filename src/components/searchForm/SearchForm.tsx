import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const SearchForm = (): JSX.Element => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <form>
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
