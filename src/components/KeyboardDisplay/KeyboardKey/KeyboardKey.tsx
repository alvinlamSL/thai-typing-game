import React from 'react';
import { Box } from '@mui/system';

import styles from './KeyboardKey.styles';

export interface KeyboardKeyProps {
    mainText: string
    subText?: string
    isPressed?: boolean
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({
    mainText,
    subText,
    isPressed = false,
}) => {
    return (
        <Box
            sx={{
                ...styles.key,
                background: isPressed ? '#B3A0FF' : '#DCD3FF'
            }}
        >
            <Box sx={{ ...styles.mainText }}>{mainText}</Box>
            <Box sx={{ ...styles.subText }}>{subText ?? ''}</Box>
        </Box>
    );
};

export default KeyboardKey;
