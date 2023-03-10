import React, { useEffect, useState } from 'react';

import KeyboardLayout from './KeyboardLayout';

import { type SuggestedKey } from '../../../App';

interface KeyboardLayoutContainerProps {
    suggestedKey: SuggestedKey
}

const KeyboardLayoutContainer: React.FC<KeyboardLayoutContainerProps> = ({ suggestedKey }) => {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);
    const [capsLockOn, setCapsLockOn] = useState<boolean>(false);
    const [shiftKeyDown, setShiftKeyDown] = useState<boolean>(false);

    const handleKeyDown = (event: any): void => {
        setPressedKeys(prevState => [
            ...prevState,
            event.key.toLowerCase()
        ]);

        if (event.key.toLowerCase() === 'capslock') {
            setCapsLockOn(true);
        }

        if (event.key.toLowerCase() === 'shift') {
            setShiftKeyDown(true);
        }
    };

    const handleKeyUp = (event: any): void => {
        setPressedKeys(prevState => prevState.filter((item) => item !== event.key.toLowerCase()));

        if (event.key.toLowerCase() === 'capslock') {
            setCapsLockOn(false);
        }

        if (event.key.toLowerCase() === 'shift') {
            setShiftKeyDown(false);
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

    const pressedKeysObj: Record<string, boolean> = {};
    pressedKeys.forEach((key) => {
        pressedKeysObj[key] = true;
    });

    const isCapsOn = capsLockOn !== shiftKeyDown;

    return (
        <KeyboardLayout
            pressedKeys={pressedKeysObj}
            isCapsOn={isCapsOn}
            suggestedKey={suggestedKey}
        />
    );
};

export default KeyboardLayoutContainer;
