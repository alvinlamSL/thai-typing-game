import React from 'react';
import { Container } from '@mui/material';

import ReducerContext from './reducer/reducerContext';
import { reducer } from './reducer';
import { initialState } from './reducer/state';

import Banner from './components/Banner';
import TextDisplay from './components/TextDisplay/index';
import KeyboardDisplay from './components/KeyboardDisplay';

import './App.css';
import styles from './App.styles';

const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <ReducerContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <Container sx={{ ...styles?.appContainer }} maxWidth="md">
                    <Banner/>
                    <TextDisplay />
                    <KeyboardDisplay />
                </Container>
            </div>
        </ReducerContext.Provider>
    );
};

export default App;
