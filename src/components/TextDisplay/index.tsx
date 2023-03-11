import React, { useEffect, useState } from 'react';

import {
    keyList,
    keyListShift,
    thaiPhonemeScripts,
    engPhonemeScripts,
    reverseLetterMap,
    reverseLetterMapCaps,
} from './constants';
import { splitPhonemeScript } from './utils';

import TextDisplay from './TextDisplay';

import type { PhonemeStartEnd } from './utils';
import type { SuggestedKey } from '../../App';

interface TextState {
    lastLetter: string
    enteredText: string
    shiftKeyDown: boolean
    capsLockOn: boolean
    currThaiScriptLetterIndex: number
    currThaiPhonemeLetterIndex: number
    backspacesRequired: number
    phonemeStartEndIndex: number
    engPhonemeStartEndList: PhonemeStartEnd[]
    thaiPhonemeStartEndList: PhonemeStartEnd[]
    currEngPhonemeScript: string
    currThaiPhonemeScript: string
    currThaiScript: string
    currScriptIndex: number
};

interface TextDisplayContainerProps {
    setSuggestedKey: (suggestedKey: SuggestedKey) => void
}

const TextDisplayContainer: React.FC<TextDisplayContainerProps> = ({ setSuggestedKey }) => {
    const [textState, setTextState] = useState<TextState>({
        lastLetter: '',
        enteredText: '',
        shiftKeyDown: false,
        capsLockOn: false,
        currThaiScriptLetterIndex: 0,
        currThaiPhonemeLetterIndex: 0,
        backspacesRequired: 0,
        phonemeStartEndIndex: 0,
        engPhonemeStartEndList: [],
        thaiPhonemeStartEndList: [],
        currEngPhonemeScript: '',
        currThaiPhonemeScript: '',
        currThaiScript: '',
        currScriptIndex: 0,
    });

    const handleKeyDown = (event: any): void => {
        const keyValue = event.key.toLowerCase();

        // Set the text state based on the fresh state
        // using the setState(prevState => {}) pattern
        setTextState(prevState => {
            const {
                lastLetter,
                enteredText,
                backspacesRequired,
                currThaiScriptLetterIndex,
                currThaiPhonemeLetterIndex,
                phonemeStartEndIndex,
                currThaiScript,
                currThaiPhonemeScript,
            } = prevState;

            const shouldDecreaseCurrScriptLetterIndex = (
                (currThaiScriptLetterIndex > 0) &&
                (backspacesRequired === 0) &&
                (lastLetter === currThaiScript[currThaiScriptLetterIndex - 1])
            );

            let newThaiPhonemeLetterIndex = shouldDecreaseCurrScriptLetterIndex
                ? currThaiPhonemeLetterIndex - 1
                : currThaiPhonemeLetterIndex;

            let newPhonemeStartEndIndex = phonemeStartEndIndex;
            if (currThaiPhonemeScript[newThaiPhonemeLetterIndex] === '.') {
                newThaiPhonemeLetterIndex--;
                newPhonemeStartEndIndex--;
            }

            if (keyValue === 'backspace' && lastLetter && enteredText.length > 0) {
                return ({
                    ...prevState,
                    lastLetter: enteredText[enteredText.length - 1],
                    enteredText: enteredText.slice(0, -1),
                    currThaiScriptLetterIndex: shouldDecreaseCurrScriptLetterIndex
                        ? currThaiScriptLetterIndex - 1
                        : currThaiScriptLetterIndex,
                    backspacesRequired: backspacesRequired > 0
                        ? backspacesRequired - 1
                        : backspacesRequired,
                    currThaiPhonemeLetterIndex: newThaiPhonemeLetterIndex,
                    phonemeStartEndIndex: newPhonemeStartEndIndex,
                });
            }

            if (keyValue === 'backspace' && lastLetter) {
                return ({
                    ...prevState,
                    lastLetter: '',
                    enteredText: '',
                    currThaiScriptLetterIndex: shouldDecreaseCurrScriptLetterIndex
                        ? currThaiScriptLetterIndex - 1
                        : currThaiScriptLetterIndex,
                    backspacesRequired: backspacesRequired > 0
                        ? backspacesRequired - 1
                        : backspacesRequired,
                    currThaiPhonemeLetterIndex: newThaiPhonemeLetterIndex,
                    phonemeStartEndIndex: newPhonemeStartEndIndex,
                });
            }

            if (keyValue === 'capslock') {
                return ({
                    ...prevState,
                    capsLockOn: true,
                });
            }

            if (keyValue === 'shift') {
                return ({
                    ...prevState,
                    shiftKeyDown: true,
                });
            }

            if (currThaiScriptLetterIndex === currThaiScript.length && keyValue === 'enter') {
                return ({
                    ...prevState,
                    currScriptIndex: prevState.currScriptIndex + 1,
                });
            }

            if (currThaiScriptLetterIndex === currThaiScript.length) {
                return prevState;
            }

            // If no valid key is pressed
            if (!keyList[keyValue]) {
                return prevState;
            }

            const currKeyList = (prevState.shiftKeyDown !== prevState.capsLockOn)
                ? keyListShift
                : keyList;

            const currThaiScriptLetter = currThaiScript[currThaiScriptLetterIndex];

            // Where we are on the thai script
            let newScriptLetterIndex = currThaiScriptLetterIndex;
            let newBackspacesRequired = backspacesRequired;
            newThaiPhonemeLetterIndex = currThaiPhonemeLetterIndex;
            newPhonemeStartEndIndex = phonemeStartEndIndex;
            if (currThaiScriptLetter === currKeyList[keyValue].displayValue && backspacesRequired === 0) {
                newScriptLetterIndex++;
                newThaiPhonemeLetterIndex++;
            } else {
                newBackspacesRequired++;
            }

            if (currThaiPhonemeScript[newThaiPhonemeLetterIndex] === '.') {
                newThaiPhonemeLetterIndex++;
                newPhonemeStartEndIndex++;
            }

            // If a valid key is pressed
            return ({
                ...prevState,
                lastLetter: currKeyList[keyValue].displayValue,
                enteredText: `${prevState.enteredText}${prevState.lastLetter ?? ''}`,
                currThaiScriptLetterIndex: newScriptLetterIndex,
                currThaiPhonemeLetterIndex: newThaiPhonemeLetterIndex,
                backspacesRequired: newBackspacesRequired,
                phonemeStartEndIndex: newPhonemeStartEndIndex,
            });
        });
    };

    const handleKeyUp = (event: any): void => {
        if (event.key.toLowerCase() === 'capslock') {
            setTextState(prevState => ({
                ...prevState,
                capsLockOn: false,
            }));
        }

        if (event.key.toLowerCase() === 'shift') {
            setTextState(prevState => ({
                ...prevState,
                shiftKeyDown: false,
            }));
        }
    };

    // Init key up/down listeners
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Init scripts
    useEffect(() => {
        const { currScriptIndex } = textState;
        if (currScriptIndex === engPhonemeScripts.length) {
            return;
        }

        const newThaiPhonemeScript = thaiPhonemeScripts[currScriptIndex];
        const newEngPhonemeScript = engPhonemeScripts[currScriptIndex];

        setTextState(prevState => ({
            ...prevState,
            currEngPhonemeScript: newEngPhonemeScript,
            currThaiPhonemeScript: newThaiPhonemeScript,
            currThaiScript: newThaiPhonemeScript.replaceAll('.', ''),
        }));
    }, [textState.currScriptIndex]);

    // Reset state when script changes
    useEffect(() => {
        const { currEngPhonemeScript, currThaiPhonemeScript } = textState;
        setTextState(prevState => ({
            ...prevState,
            lastLetter: '',
            enteredText: '',
            currThaiScriptLetterIndex: 0,
            currThaiPhonemeLetterIndex: 0,
            backspacesRequired: 0,
            phonemeStartEndIndex: 0,
            engPhonemeStartEndList: splitPhonemeScript(currEngPhonemeScript),
            thaiPhonemeStartEndList: splitPhonemeScript(currThaiPhonemeScript, true),
        }));
    }, [textState.currEngPhonemeScript]);

    // Update phoneme indexes when correct key typed
    useEffect(() => {
        const suggestedKey: SuggestedKey = { key: '', isCaps: false };
        const { currThaiScriptLetterIndex, currThaiScript } = textState;
        const currThaiScriptLetter = currThaiScript[currThaiScriptLetterIndex];

        if (reverseLetterMap[currThaiScriptLetter]) {
            suggestedKey.key = reverseLetterMap[currThaiScriptLetter];
        } else if (reverseLetterMapCaps[currThaiScriptLetter]) {
            suggestedKey.key = reverseLetterMapCaps[currThaiScriptLetter];
            suggestedKey.isCaps = true;
        }

        setSuggestedKey(suggestedKey);
    }, [textState.currThaiScriptLetterIndex, textState.currThaiScript]);

    const {
        engPhonemeStartEndList,
        thaiPhonemeStartEndList,
        phonemeStartEndIndex
    } = textState;

    const {
        start: engPhonemeStartIndex,
        end: engPhonemeEndIndex
    } = engPhonemeStartEndList[phonemeStartEndIndex] ?? { start: 0, end: 0 };

    const {
        start: thaiPhonemeStartIndex,
        end: thaiPhonemeEndIndex
    } = thaiPhonemeStartEndList[phonemeStartEndIndex] ?? { start: 0, end: 0 };

    return (
        <TextDisplay
            enteredText={textState.enteredText}
            lastLetter={textState.lastLetter}
            thaiScript={textState.currThaiScript}
            engPhonemeScript={textState.currEngPhonemeScript}
            engPhonemeStartIndex={engPhonemeStartIndex}
            engPhonemeEndIndex={engPhonemeEndIndex}
            thaiPhonemeStartIndex={thaiPhonemeStartIndex}
            thaiPhonemeEndIndex={thaiPhonemeEndIndex}
        />
    );
};

export default TextDisplayContainer;
