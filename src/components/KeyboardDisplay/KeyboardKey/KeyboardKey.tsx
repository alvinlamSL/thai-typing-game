import React from 'react';
import { Box } from '@mui/system';

import styles from './KeyboardKey.styles';

interface KeyboardKeyProps {
    mainText: string
    subText?: string
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({ mainText, subText }) => {
    return (
        <Box
            sx={{ ...styles.key }}
        >
            <Box sx={{ ...styles.mainText }}>{mainText}</Box>
            <Box sx={{ ...styles.subText }}>{subText ?? ''}</Box>
        </Box>
    );
};

export default KeyboardKey;
