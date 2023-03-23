import React, { useState } from 'react';
import { Container } from '@mui/material';

import ReducerContext from './reducer/reducerContext';
import { reducer } from './reducer';
import { initialState } from './reducer/state';

import Banner from './components/Banner';
import TextDisplay from './components/TextDisplay/index';
import KeyboardDisplay from './components/KeyboardDisplay';

import './App.css';
import styles from './App.styles';

export interface SuggestedKey {
    key: string
    isCaps: boolean
}

const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [suggestedKey, setSuggestedKey] = useState<SuggestedKey>({ key: '', isCaps: false });
    const [tappedKeys, setTappedKeys] = useState<string[]>([]);

    return (
        <ReducerContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <Container sx={{ ...styles?.appContainer }} maxWidth="md">
                    <Banner/>
                    <TextDisplay
                        tappedKeys={tappedKeys}
                        setSuggestedKey={setSuggestedKey}
                        setTappedKeys={setTappedKeys}
                    />
                    <KeyboardDisplay
                        suggestedKey={suggestedKey}
                        setTappedKeys={setTappedKeys}
                    />
                </Container>
            </div>
        </ReducerContext.Provider>
    );
};

export default App;
