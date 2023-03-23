import React from 'react';
import { Box } from '@mui/system';

import KeyboardLayout from './KeyboardLayout/index';

import { type SuggestedKey } from '../../App';

import styles from './KeyboardDisplay.styles';

interface KeyboardDisplayProps {
    suggestedKey: SuggestedKey
    setTappedKeys: React.Dispatch<React.SetStateAction<string[]>>
}

const KeyboardDisplay: React.FC<KeyboardDisplayProps> = ({
    suggestedKey,
    setTappedKeys,
}) => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <KeyboardLayout
                suggestedKey={suggestedKey}
                setTappedKeys={setTappedKeys}
            />
        </Box>
    );
};

export default KeyboardDisplay;
