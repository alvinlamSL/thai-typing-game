import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import { engScript, compoundLetters } from './constants';

import styles from './TextDisplay.styles';

interface TextDisplayProps {
    enteredText: string
    lastLetter: string
    thaiScript: string
    engPhonemeStartIndex: number
    engPhonemeEndIndex: number
    thaiPhonemeStartIndex: number
    thaiPhonemeEndIndex: number
}

interface ThaiScriptDisplayProps {
    enteredText: string
    lastEnteredLetter: string
    thaiScript: string
    thaiPhonemeStartIndex: number
    thaiPhonemeEndIndex: number
}

interface EngScriptDisplayProps {
    engPhonemeStartIndex: number
    engPhonemeEndIndex: number
}

const ThaiScriptDisplay: React.FC<ThaiScriptDisplayProps> = ({
    enteredText,
    lastEnteredLetter,
    thaiScript,
    thaiPhonemeStartIndex,
    thaiPhonemeEndIndex,
}) => {
    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '65%',
            }}
        >
            <Box component='span'>
                {thaiScript.slice(0, thaiPhonemeStartIndex)}
            </Box>
            <Box component='span' sx={{ background: '#ffffe0', color: 'black' }}>
                {thaiScript.slice(thaiPhonemeStartIndex, thaiPhonemeEndIndex)}
            </Box>
            <Box component='span'>
                {thaiScript.slice(thaiPhonemeEndIndex)}
            </Box>
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

const EngScriptDisplay: React.FC<EngScriptDisplayProps> = ({
    engPhonemeStartIndex,
    engPhonemeEndIndex,
}) => {
    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '30%',
            }}
        >
            <Box component='span'>
                {engScript.slice(0, engPhonemeStartIndex)}
            </Box>
            <Box component='span' sx={{ background: '#ffffe0', color: 'black' }}>
                {engScript.slice(engPhonemeStartIndex, engPhonemeEndIndex)}
            </Box>
            <Box component='span'>
                {engScript.slice(engPhonemeEndIndex)}
            </Box>
        </Grid>
    );
};

const TextDisplay: React.FC<TextDisplayProps> = ({
    enteredText,
    lastLetter,
    thaiScript,
    engPhonemeStartIndex,
    engPhonemeEndIndex,
    thaiPhonemeStartIndex,
    thaiPhonemeEndIndex,
}) => {
    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <Grid container sx={{ height: '100%' }}>
                <ThaiScriptDisplay
                    enteredText={enteredText}
                    lastEnteredLetter={lastLetter}
                    thaiScript={thaiScript}
                    thaiPhonemeStartIndex={thaiPhonemeStartIndex}
                    thaiPhonemeEndIndex={thaiPhonemeEndIndex}
                />
                <EngScriptDisplay
                    engPhonemeStartIndex={engPhonemeStartIndex}
                    engPhonemeEndIndex={engPhonemeEndIndex}
                />
            </Grid>
        </Box>
    );
};

export default TextDisplay;
