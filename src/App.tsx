import React from 'react';
import { Container } from '@mui/material';

import ReducerContext from './reducer/reducerContext';
import { reducer } from './reducer';
import { setLesson } from './reducer/actions';
import { initialState } from './reducer/state';

import Intro from './components/Intro';
import Banner from './components/Banner';
import TextDisplay from './components/TextDisplay/index';
import KeyboardDisplay from './components/KeyboardDisplay';

import { type Lesson } from './types';

import styles from './App.styles';

const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/lessons/lesson1.json`)
            .then(async (f) => await f.json())
            .then((data) => {
                const lesson: Lesson = {
                    title: data.title,
                    engScripts: data.engScripts,
                    engPhonemeScripts: data.engPhonemeScripts,
                    thaiPhonemeScripts: data.thaiPhonemeScripts,
                };

                dispatch(setLesson(lesson));
            }, () => {});
    }, []);

    return (
        <ReducerContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <Container sx={{ ...styles?.appContainer }} maxWidth="md">
                    <Intro/>
                    <Banner/>
                    <TextDisplay />
                    <KeyboardDisplay />
                </Container>
            </div>
        </ReducerContext.Provider>
    );
};

export default App;
