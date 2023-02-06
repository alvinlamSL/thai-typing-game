import React from 'react';
import { Box } from '@mui/system';

import styles from './KeyboardDisplay.styles';

const TextDisplay: React.FC = () => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            KeyboardDisplay
        </Box>
    );
};

export default TextDisplay;
