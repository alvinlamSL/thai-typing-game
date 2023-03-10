import React, { useEffect, useState } from 'react';

import {
    keyList,
    keyListShift,
    thaiScript,
    engScript,
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
    scriptString: string
    currThaiScriptLetterIndex: number
    currThaiPhonemeLetterIndex: number
    backspacesRequired: number
    phonemeStartEndIndex: number
    engPhonemeStartEndList: PhonemeStartEnd[]
    thaiPhonemeStartEndList: PhonemeStartEnd[]
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
        scriptString: thaiScript.replaceAll('.', ''),
        currThaiScriptLetterIndex: 0,
        currThaiPhonemeLetterIndex: 0,
        backspacesRequired: 0,
        phonemeStartEndIndex: 0,
        engPhonemeStartEndList: splitPhonemeScript(engScript),
        thaiPhonemeStartEndList: splitPhonemeScript(thaiScript, true),
    });

    const handleKeyDown = (event: any): void => {
        const keyValue = event.key.toLowerCase();

        // Set the text state based on the fresh state
        // using the setState(prevState => {}) pattern
        setTextState(prevState => {
            const {
                lastLetter,
                enteredText,
                scriptString,
                backspacesRequired,
                currThaiScriptLetterIndex,
                currThaiPhonemeLetterIndex,
                phonemeStartEndIndex,
            } = prevState;

            const shouldDecreaseCurrScriptLetterIndex = (
                (currThaiScriptLetterIndex > 0) &&
                (backspacesRequired === 0) &&
                (lastLetter === scriptString[currThaiScriptLetterIndex - 1])
            );

            let newThaiPhonemeLetterIndex = shouldDecreaseCurrScriptLetterIndex
                ? currThaiPhonemeLetterIndex - 1
                : currThaiPhonemeLetterIndex;

            let newPhonemeStartEndIndex = phonemeStartEndIndex;
            if (thaiScript[newThaiPhonemeLetterIndex] === '.') {
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

            // If no valid key is pressed
            if (!keyList[keyValue]) {
                return prevState;
            }

            const currKeyList = (prevState.shiftKeyDown !== prevState.capsLockOn)
                ? keyListShift
                : keyList;

            const currThaiScriptLetter = scriptString[currThaiScriptLetterIndex];

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

            if (thaiScript[newThaiPhonemeLetterIndex] === '.') {
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

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        const suggestedKey: SuggestedKey = { key: '', isCaps: false };
        const { currThaiScriptLetterIndex, scriptString } = textState;
        const currThaiScriptLetter = scriptString[currThaiScriptLetterIndex];

        if (reverseLetterMap[currThaiScriptLetter]) {
            suggestedKey.key = reverseLetterMap[currThaiScriptLetter];
        } else if (reverseLetterMapCaps[currThaiScriptLetter]) {
            suggestedKey.key = reverseLetterMapCaps[currThaiScriptLetter];
            suggestedKey.isCaps = true;
        }

        setSuggestedKey(suggestedKey);
    }, [textState.currThaiScriptLetterIndex]);

    const {
        engPhonemeStartEndList,
        thaiPhonemeStartEndList,
        phonemeStartEndIndex
    } = textState;

    const {
        start: engPhonemeStartIndex,
        end: engPhonemeEndIndex
    } = engPhonemeStartEndList[phonemeStartEndIndex];

    const {
        start: thaiPhonemeStartIndex,
        end: thaiPhonemeEndIndex
    } = thaiPhonemeStartEndList[phonemeStartEndIndex];

    return (
        <TextDisplay
            enteredText={textState.enteredText}
            lastLetter={textState.lastLetter}
            thaiScript={textState.scriptString}
            engPhonemeStartIndex={engPhonemeStartIndex}
            engPhonemeEndIndex={engPhonemeEndIndex}
            thaiPhonemeStartIndex={thaiPhonemeStartIndex}
            thaiPhonemeEndIndex={thaiPhonemeEndIndex}
        />
    );
};

export default TextDisplayContainer;
