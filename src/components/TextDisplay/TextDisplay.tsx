import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import {
    thaiScript,
    engScript
} from './constants';

import styles from './TextDisplay.styles';

const ThaiScriptDisplay: React.FC = () => {
    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '65%',
            }}
        >
            <div>
                {thaiScript.replaceAll('.', '')}
            </div>
            <Box sx={{ ...styles?.blinkingCursor }}>
                <span>|</span>
            </Box>
        </Grid>
    );
};

const EngScriptDisplay: React.FC = () => {
    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '30%',
            }}
        >
            <div>{ engScript }</div>
        </Grid>
    );
};

const TextDisplay: React.FC = () => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <Grid container sx={{ height: '100%' }}>
                <ThaiScriptDisplay/>
                <EngScriptDisplay/>
            </Grid>
        </Box>
    );
};

export default TextDisplay;
