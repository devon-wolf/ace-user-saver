import { Container, TextField } from '@material-ui/core';
import React from 'react';

const UserSaver = (): JSX.Element => {
    return (
        <Container maxWidth="sm">
            <form>
                <TextField 
                    placeholder="Enter username"
                    aria-label="user search"
                />
            </form>
        </Container>
    );
};

export default UserSaver;
