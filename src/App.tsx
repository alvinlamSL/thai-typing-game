import React, { useEffect } from 'react';
import { CircularProgress, Container } from '@mui/material';

import ReducerContext from './reducer/reducerContext';
import { reducer } from './reducer';
import { setLesson, setLessons } from './reducer/actions';
import { initialState } from './reducer/state';

import Intro from './components/Intro';
import Banner from './components/Banner';
import TextDisplay from './components/TextDisplay/index';
import KeyboardDisplay from './components/KeyboardDisplay';

import { type Lesson } from './types';

import styles from './App.styles';

const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const { lessonTitles, lessonIndex } = state;

    // Fetch lesson 1
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/lessons/lesson1.json`)
            .then(async (f) => await f.json())
            .then((data) => {
                const lesson: Lesson = {
                    title: data.title,
                    engScripts: data.engScripts,
                    engPhonemeScripts: data.engPhonemeScripts,
                    thaiPhonemeScripts: data.thaiPhonemeScripts,
                    index: 1
                };

                dispatch(setLesson(lesson));
            }, () => {});
    }, []);

    // Fetch list of lessons
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/lessons.json`)
            .then(async (f) => await f.json())
            .then((data) => {
                dispatch(setLessons(data));
            }, () => {});
    }, []);

    return (
        <>
            {(lessonTitles.length === 0 || lessonIndex < 0) && (
                <CircularProgress/>
            )}
            {(lessonTitles.length > 0 && lessonIndex >= 0) && (
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
            )}
        </>
    );
};

export default App;
