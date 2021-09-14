import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
import UserTable from '../components/results/UserTable';
import SearchForm from '../components/searchForm/SearchForm';
import { User } from '../types';

const UserSaver = (): JSX.Element => {
    const [savedUsers, setSavedUsers] = useState<User[]>([]);
    
    const handleFormSubmit = (user: User) => {
        setSavedUsers([...savedUsers, user]);
    };

    return (
        <Container maxWidth="sm">
            <SearchForm onFormSubmit={handleFormSubmit} />
            {savedUsers.length > 0 &&
                <UserTable />
            }
        </Container>
    );
};

export default UserSaver;
