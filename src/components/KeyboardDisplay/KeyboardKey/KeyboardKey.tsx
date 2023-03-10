import React from 'react';
import { Box } from '@mui/system';

import styles from './KeyboardKey.styles';

export interface KeyboardKeyProps {
    mainText: string
    subText?: string
    isPressed?: boolean
    isSuggested?: boolean
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({
    mainText,
    subText,
    isPressed = false,
    isSuggested = false,
}) => {
    const bgColor = isPressed
        ? '#B3A0FF'
        : (isSuggested ? 'orange' : '#DCD3FF');

    return (
        <Box
            sx={{
                ...styles.key,
                background: bgColor
            }}
        >
            <Box sx={{ ...styles.mainText }}>{mainText}</Box>
            <Box sx={{ ...styles.subText }}>{subText ?? ''}</Box>
        </Box>
    );
};

export default KeyboardKey;
