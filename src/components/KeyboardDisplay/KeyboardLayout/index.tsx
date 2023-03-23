import React, { useContext, useEffect, useState } from 'react';

import KeyboardLayout from './KeyboardLayout';

import ReducerContext from '../../../reducer/reducerContext';
import { keyDown, keyUp } from '../../../reducer/actions';
import type { SuggestedKey } from '../../../App';

interface KeyboardLayoutContainerProps {
    suggestedKey: SuggestedKey
    setTappedKeys: React.Dispatch<React.SetStateAction<string[]>>
}

const KeyboardLayoutContainer: React.FC<KeyboardLayoutContainerProps> = ({
    suggestedKey,
    setTappedKeys,
}) => {
    const { state, dispatch } = useContext(ReducerContext);
    const { pressedKeys, shiftKeyDown } = state;
    const [capsLockOn, setCapsLockOn] = useState<boolean>(false);

    const handleKeyDown = (event: any): void => {
        dispatch(keyDown(event.key.toLowerCase()));
    };

    const handleKeyUp = (event: any): void => {
        dispatch(keyUp(event.key.toLowerCase()));
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const handleKeyTap = (keyValue: string): void => {
        setTappedKeys(prevState => [...prevState, keyValue]);
        if (keyValue === 'capslock') {
            setCapsLockOn(prevState => !prevState);
        }
    };

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
            handleKeyTap={handleKeyTap}
        />
    );
};

export default KeyboardLayoutContainer;
