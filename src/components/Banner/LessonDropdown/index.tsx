import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import { type Lesson } from '../../../types';

import LessonDropdown from './LessonDropdown';

import ReducerContext from '../../../reducer/reducerContext';
import { setLesson } from '../../../reducer/actions';

const LessonDropdownContainer: React.FC = () => {
    const { dispatch } = useContext(ReducerContext);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/lessons.json`)
            .then(async (f) => await f.json())
            .then((data) => {
                setLessons(data);
            }, () => {});
    }, []);

    const handleOnSelect = (lessonId: number): void => {
        fetch(`${process.env.PUBLIC_URL}/lessons/lesson${lessonId}.json`)
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
    };

    return (
        <LessonDropdown
            lessons={lessons}
            onSelect={handleOnSelect}
        />
    );
};

export default LessonDropdownContainer;