import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import {
    thaiScript,
    engScript,
    compoundLetters
} from './constants';

import styles from './TextDisplay.styles';

interface TextDisplayProps {
    enteredText: string
    lastLetter: string
}

interface ThaiScriptDisplayProps {
    enteredText: string
    lastEnteredLetter: string
}

const ThaiScriptDisplay: React.FC<ThaiScriptDisplayProps> = ({ enteredText, lastEnteredLetter }) => {
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
            {compoundLetters.includes(lastEnteredLetter) && (
                <>
                    <Box component='span'>
                        {enteredText.slice(0, -1)}
                    </Box>
                    <Box component='span' sx={{ color: '#00ff00' }}>
                        {`${enteredText[enteredText.length - 1] ?? ''}${lastEnteredLetter}`}
                    </Box>
                </>
            )}
            {!compoundLetters.includes(lastEnteredLetter) && (
                <>
                    <Box component='span'>
                        {enteredText}
                    </Box>
                    <Box component='span' sx={{ color: '#00ff00' }}>
                        {lastEnteredLetter}
                    </Box>
                </>
            )}
            <Box component='span' sx={{ ...styles?.blinkingCursor }}>
                |
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

const TextDisplay: React.FC<TextDisplayProps> = ({ enteredText, lastLetter }) => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <Grid container sx={{ height: '100%' }}>
                <ThaiScriptDisplay
                    enteredText={enteredText}
                    lastEnteredLetter={lastLetter}
                />
                <EngScriptDisplay/>
            </Grid>
        </Box>
    );
};

export default TextDisplay;
