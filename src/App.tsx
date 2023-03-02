import React from 'react';
import { Container } from '@mui/material';

import './App.css';
import Banner from './components/Banner';
import TextDisplay from './components/TextDisplay/index';
import KeyboardDisplay from './components/KeyboardDisplay';

const App: React.FC = () => {
    return (
        <div className="App">
            <Container maxWidth="md">
                <Banner/>
                <TextDisplay/>
                <KeyboardDisplay/>
            </Container>
        </div>
    );
};

export default App;
