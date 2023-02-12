import React from 'react';
import { Box } from '@mui/system';

import KeyboardLayout from './KeyboardLayout/index';

import styles from './KeyboardDisplay.styles';

const KeyboardDisplay: React.FC = () => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <KeyboardLayout />
        </Box>
    );
};

export default KeyboardDisplay;
