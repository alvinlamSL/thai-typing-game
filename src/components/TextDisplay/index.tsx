import React, { useEffect, useState } from 'react';

import { keyList, keyListShift } from './constants';

import TextDisplay from './TextDisplay';

interface TextState {
    lastLetter: string
    enteredText: string
    shiftKeyDown: boolean
    capsLockOn: boolean
};

const TextDisplayContainer: React.FC = () => {
    const [textState, setTextState] = useState<TextState>({
        lastLetter: '',
        enteredText: '',
        shiftKeyDown: false,
        capsLockOn: false,
    });

    const handleKeyDown = (event: any): void => {
        const keyValue = event.key.toLowerCase();

        // Set the text state based on the fresh state
        // using the setState(prevState => {}) pattern
        setTextState(prevState => {
            const { lastLetter, enteredText } = prevState;
            if (keyValue === 'backspace' && lastLetter && enteredText.length > 0) {
                return ({
                    ...prevState,
                    lastLetter: enteredText[enteredText.length - 1],
                    enteredText: enteredText.slice(0, -1),
                });
            }

            if (keyValue === 'backspace' && lastLetter) {
                return ({
                    ...prevState,
                    lastLetter: '',
                    enteredText: '',
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

            return ({
                lastLetter: currKeyList[keyValue].displayValue,
                enteredText: `${prevState.enteredText}${prevState.lastLetter ?? ''}`,
                shiftKeyDown: prevState.shiftKeyDown,
                capsLockOn: prevState.capsLockOn,
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
        />
    );
};

export default TextDisplayContainer;
