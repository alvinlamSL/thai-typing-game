import React from 'react';
import { Box } from '@mui/system';

import KeyboardLayout from './KeyboardLayout/index';

import { type SuggestedKey } from '../../App';

import styles from './KeyboardDisplay.styles';

interface KeyboardDisplayProps {
    suggestedKey: SuggestedKey
}

const KeyboardDisplay: React.FC<KeyboardDisplayProps> = ({ suggestedKey }) => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <KeyboardLayout suggestedKey={suggestedKey} />
        </Box>
    );
};

export default KeyboardDisplay;
