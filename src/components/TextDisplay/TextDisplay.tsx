import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import { engScript, compoundLetters } from './constants';

import styles from './TextDisplay.styles';

interface TextDisplayProps {
    enteredText: string
    lastLetter: string
    thaiScript: string
    currScriptLetterIndex: number
}

interface ThaiScriptDisplayProps {
    enteredText: string
    lastEnteredLetter: string
    thaiScript: string
    currScriptLetterIndex: number
}

const ThaiScriptDisplay: React.FC<ThaiScriptDisplayProps> = ({
    enteredText,
    lastEnteredLetter,
    thaiScript,
    currScriptLetterIndex,
}) => {
    const currThaiScriptLetter = thaiScript[currScriptLetterIndex];

    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '65%',
            }}
        >
            {compoundLetters.includes(currThaiScriptLetter) && (
                <>
                    <Box component='span'>
                        {thaiScript.slice(0, currScriptLetterIndex - 1)}
                    </Box>
                    <Box component='span' sx={{ background: '#ffffe0', color: 'black' }}>
                        {thaiScript.slice(currScriptLetterIndex - 1, currScriptLetterIndex + 1)}
                    </Box>
                    <Box component='span'>
                        {thaiScript.slice(currScriptLetterIndex + 1)}
                    </Box>
                </>
            )}
            {!compoundLetters.includes(currThaiScriptLetter) && (
                <>
                    <Box component='span'>
                        {thaiScript.slice(0, currScriptLetterIndex)}
                    </Box>
                    <Box component='span' sx={{ background: '#ffffe0', color: 'black' }}>
                        {thaiScript.slice(currScriptLetterIndex, currScriptLetterIndex + 1)}
                    </Box>
                    <Box component='span'>
                        {thaiScript.slice(currScriptLetterIndex + 1)}
                    </Box>
                </>
            )}
            <div/>
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

const TextDisplay: React.FC<TextDisplayProps> = ({
    enteredText,
    lastLetter,
    thaiScript,
    currScriptLetterIndex,
}) => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <Grid container sx={{ height: '100%' }}>
                <ThaiScriptDisplay
                    enteredText={enteredText}
                    lastEnteredLetter={lastLetter}
                    currScriptLetterIndex={currScriptLetterIndex}
                    thaiScript={thaiScript}
                />
                <EngScriptDisplay/>
            </Grid>
        </Box>
    );
};

export default TextDisplay;
