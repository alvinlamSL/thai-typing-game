import React, { useContext } from 'react';

import KeyboardKey from './KeyboardKey';

import ReducerContext from '../../../reducer/reducerContext';
import { keyTap } from '../../../reducer/actions';

interface KeyboardKeyContainerProps {
    mainText: string
    iconName?: string
    subText?: string
    isPressed?: boolean
    isSuggested?: boolean
    value?: string
}

const KeyboardKeyContainer: React.FC<KeyboardKeyContainerProps> = (props) => {
    const { dispatch } = useContext(ReducerContext);

    const handleKeyTap = (keyValue: string): void => {
        dispatch(keyTap(keyValue.toLowerCase()));
    };

    return (
        <KeyboardKey
            {...props}
            handleKeyTap={handleKeyTap}
        />
    );
};

export default KeyboardKeyContainer;
