import React, { useEffect, useState } from 'react';

import {
    keyList,
    keyListShift,
    thaiScript
} from './constants';

import TextDisplay from './TextDisplay';

interface TextState {
    lastLetter: string
    enteredText: string
    shiftKeyDown: boolean
    capsLockOn: boolean
    scriptString: string
    currScriptLetterIndex: number
    backspacesRequired: number
};

const TextDisplayContainer: React.FC = () => {
    const [textState, setTextState] = useState<TextState>({
        lastLetter: '',
        enteredText: '',
        shiftKeyDown: false,
        capsLockOn: false,
        scriptString: thaiScript.replaceAll('.', ''),
        currScriptLetterIndex: 0,
        backspacesRequired: 0,
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
                currScriptLetterIndex
            } = prevState;

            const shouldDecreaseCurrScriptLetterIndex = (
                (currScriptLetterIndex > 0) &&
                (backspacesRequired === 0) &&
                (lastLetter === scriptString[currScriptLetterIndex - 1])
            );

            if (keyValue === 'backspace' && lastLetter && enteredText.length > 0) {
                return ({
                    ...prevState,
                    lastLetter: enteredText[enteredText.length - 1],
                    enteredText: enteredText.slice(0, -1),
                    currScriptLetterIndex: shouldDecreaseCurrScriptLetterIndex
                        ? currScriptLetterIndex - 1
                        : currScriptLetterIndex,
                    backspacesRequired: backspacesRequired > 0
                        ? backspacesRequired - 1
                        : backspacesRequired,
                });
            }

            if (keyValue === 'backspace' && lastLetter) {
                return ({
                    ...prevState,
                    lastLetter: '',
                    enteredText: '',
                    currScriptLetterIndex: shouldDecreaseCurrScriptLetterIndex
                        ? currScriptLetterIndex - 1
                        : currScriptLetterIndex,
                    backspacesRequired: backspacesRequired > 0
                        ? backspacesRequired - 1
                        : backspacesRequired,
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

            if (!keyList[keyValue]) {
                return prevState;
            }

            const currKeyList = (prevState.shiftKeyDown !== prevState.capsLockOn)
                ? keyListShift
                : keyList;

            const currThaiScriptLetter = scriptString[currScriptLetterIndex];

            // Where we are on the thai script
            let newScriptLetterIndex = currScriptLetterIndex;
            let newBackspacesRequired = backspacesRequired;
            if (currThaiScriptLetter === currKeyList[keyValue].displayValue && backspacesRequired === 0) {
                newScriptLetterIndex++;
            } else {
                newBackspacesRequired++;
            }

            return ({
                ...prevState,
                lastLetter: currKeyList[keyValue].displayValue,
                enteredText: `${prevState.enteredText}${prevState.lastLetter ?? ''}`,
                currScriptLetterIndex: newScriptLetterIndex,
                backspacesRequired: newBackspacesRequired,
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

    return (
        <TextDisplay
            enteredText={textState.enteredText}
            lastLetter={textState.lastLetter}
            thaiScript={textState.scriptString}
            currScriptLetterIndex={textState.currScriptLetterIndex}
        />
    );
};

export default TextDisplayContainer;
