import React, { useContext, useEffect } from 'react';

import KeyboardLayout from './KeyboardLayout';

import ReducerContext from '../../../reducer/reducerContext';
import { keyDown, keyUp } from '../../../reducer/actions';

const KeyboardLayoutContainer: React.FC = () => {
    const { state, dispatch } = useContext(ReducerContext);
    const { pressedKeys, shiftKeyDown, capsLockOn } = state;

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

    const pressedKeysObj: Record<string, boolean> = {};
    pressedKeys.forEach((key) => {
        pressedKeysObj[key] = true;
    });

    const isCapsOn = capsLockOn !== shiftKeyDown;

    return (
        <KeyboardLayout
            pressedKeys={pressedKeysObj}
            isCapsOn={isCapsOn}
        />
    );
};

export default KeyboardLayoutContainer;
