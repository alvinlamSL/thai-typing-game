import React from 'react';
import { Box } from '@mui/system';

import styles from './TextDisplay.styles';

const TextDisplay: React.FC = () => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            DisplayText
        </Box>
    );
};

export default TextDisplay;
