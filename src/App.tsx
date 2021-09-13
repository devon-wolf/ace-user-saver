import { Container, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import UserSaver from './pages/UserSaver';

const theme = createTheme();

function App(): JSX.Element {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Container maxWidth="md">
                    <UserSaver />
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
