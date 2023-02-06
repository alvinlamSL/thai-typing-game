import React from 'react';
import { Box } from '@mui/system';

import KeyboardKey from './KeyboardKey';

import styles from './KeyboardDisplay.styles';

const TextDisplay: React.FC = () => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <KeyboardKey mainText='A' subText='B'/>
        </Box>
    );
};

export default TextDisplay;
