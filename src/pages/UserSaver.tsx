import Container from '@material-ui/core/Container';
import React from 'react';
import SearchForm from '../components/searchForm/SearchForm';

const UserSaver = (): JSX.Element => {
    return (
        <Container maxWidth="sm">
            <SearchForm />
        </Container>
    );
};

export default UserSaver;
