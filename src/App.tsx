import React, { useState } from 'react';
import { Container } from '@mui/material';

import './App.css';
import Banner from './components/Banner';
import TextDisplay from './components/TextDisplay/index';
import KeyboardDisplay from './components/KeyboardDisplay';

export interface SuggestedKey {
    key: string
    isCaps: boolean
}

const App: React.FC = () => {
    const [suggestedKey, setSuggestedKey] = useState<SuggestedKey>({ key: '', isCaps: false });

    return (
        <div className="App">
            <Container maxWidth="md">
                <Banner/>
                <TextDisplay setSuggestedKey={setSuggestedKey} />
                <KeyboardDisplay suggestedKey={suggestedKey} />
            </Container>
        </div>
    );
};

export default App;
