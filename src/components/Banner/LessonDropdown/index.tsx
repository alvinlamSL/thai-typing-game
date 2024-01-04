import React, {
    useContext,
} from 'react';
import { type Lesson } from '../../../types';

import LessonDropdown from './LessonDropdown';

import ReducerContext from '../../../reducer/reducerContext';
import { setLesson } from '../../../reducer/actions';

const LessonDropdownContainer: React.FC = () => {
    const { state, dispatch } = useContext(ReducerContext);
    const { lessonTitles } = state;

    const handleOnSelect = (lessonId: number): void => {
        fetch(`${process.env.PUBLIC_URL}/lessons/lesson${lessonId}.json`)
            .then(async (f) => await f.json())
            .then((data) => {
                const lesson: Lesson = {
                    title: data.title,
                    engScripts: data.engScripts,
                    engPhonemeScripts: data.engPhonemeScripts,
                    thaiPhonemeScripts: data.thaiPhonemeScripts,
                    index: lessonId,
                };

                dispatch(setLesson(lesson));
            }, () => {});
    };

    return (
        <LessonDropdown
            lessons={lessonTitles}
            onSelect={handleOnSelect}
        />
    );
};

export default LessonDropdownContainer;
