import React, { useContext, useEffect } from 'react';

import {
    reverseLetterMap,
    reverseLetterMapCaps,
} from './constants';

import TextDisplay from './TextDisplay';

import ReducerContext from '../../reducer/reducerContext';
import type { SuggestedKey } from '../../App';

interface TextDisplayContainerProps {
    tappedKeys: string[]
    setSuggestedKey: (suggestedKey: SuggestedKey) => void
    setTappedKeys: React.Dispatch<React.SetStateAction<string[]>>
}

const TextDisplayContainer: React.FC<TextDisplayContainerProps> = ({
    setSuggestedKey,
}) => {
    const { state } = useContext(ReducerContext);

    // Update phoneme indexes when correct key typed
    useEffect(() => {
        const suggestedKey: SuggestedKey = { key: '', isCaps: false };
        const {
            backspacesRequired,
            currThaiLetterIndex,
            currThaiScript
        } = state;
        const currThaiScriptLetter = currThaiScript[currThaiLetterIndex];

        if (backspacesRequired) {
            suggestedKey.key = 'backspace';
        } else if (reverseLetterMap[currThaiScriptLetter]) {
            suggestedKey.key = reverseLetterMap[currThaiScriptLetter];
        } else if (reverseLetterMapCaps[currThaiScriptLetter]) {
            suggestedKey.key = reverseLetterMapCaps[currThaiScriptLetter];
            suggestedKey.isCaps = true;
        }

        setSuggestedKey(suggestedKey);
    }, [
        state.currThaiLetterIndex,
        state.currThaiScript,
        state.backspacesRequired,
    ]);

    const {
        engPhonemeStartEndList,
        thaiPhonemeStartEndList,
        currPhonemeIndex,
    } = state;

    const {
        start: engPhonemeStartIndex,
        end: engPhonemeEndIndex
    } = engPhonemeStartEndList[currPhonemeIndex] ?? { start: 0, end: 0 };

    const {
        start: thaiPhonemeStartIndex,
        end: thaiPhonemeEndIndex
    } = thaiPhonemeStartEndList[currPhonemeIndex] ?? { start: 0, end: 0 };

    return (
        <TextDisplay
            enteredText={state.enteredText}
            thaiScript={state.currThaiScript}
            engScript={state.engScripts[state.currScriptIndex]}
            engPhonemeScript={state.engPhonemeScripts[state.currScriptIndex]}
            engPhonemeStartIndex={engPhonemeStartIndex}
            engPhonemeEndIndex={engPhonemeEndIndex}
            thaiPhonemeStartIndex={thaiPhonemeStartIndex}
            thaiPhonemeEndIndex={thaiPhonemeEndIndex}
            backspacesRequired={state.backspacesRequired}
        />
    );
};

export default TextDisplayContainer;
