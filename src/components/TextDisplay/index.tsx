import React, { useEffect, useState } from 'react';

import { keyList } from './constants';

import TextDisplay from './TextDisplay';

interface TextState {
    lastLetter: string
    enteredText: string
};

const TextDisplayContainer: React.FC = () => {
    const [textState, setTextState] = useState<TextState>({
        lastLetter: '',
        enteredText: '',
    });

    const handleKeyDown = (event: any): void => {
        const keyValue = event.key.toLowerCase();

        // Set the text state based on the fresh state
        // using the setState(prevState => {}) pattern
        setTextState(prevState => {
            const { lastLetter, enteredText } = prevState;
            if (keyValue === 'backspace' && lastLetter && enteredText.length > 0) {
                return ({
                    lastLetter: enteredText[enteredText.length - 1],
                    enteredText: enteredText.slice(0, -1)
                });
            }

            if (keyValue === 'backspace' && lastLetter) {
                return ({
                    lastLetter: '',
                    enteredText: '',
                });
            }

            if (!keyList[keyValue]) {
                return prevState;
            }

            return ({
                lastLetter: keyList[keyValue].displayValue,
                enteredText: `${prevState.enteredText}${prevState.lastLetter ?? ''}`
            });
        });
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
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
