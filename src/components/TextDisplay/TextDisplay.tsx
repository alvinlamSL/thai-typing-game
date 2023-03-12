import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import { compoundLetters } from './constants';

import styles from './TextDisplay.styles';

interface TextDisplayProps {
    enteredText: string
    lastLetter: string
    thaiScript: string
    engScript: string
    engPhonemeScript: string
    engPhonemeStartIndex: number
    engPhonemeEndIndex: number
    thaiPhonemeStartIndex: number
    thaiPhonemeEndIndex: number
    backspacesRequired: number
}

interface ThaiScriptDisplayProps {
    enteredText: string
    lastEnteredLetter: string
    thaiScript: string
    thaiPhonemeStartIndex: number
    thaiPhonemeEndIndex: number
    backspacesRequired: number
}

interface EngPhonemeScriptDisplayProps {
    engPhonemeScript: string
    engPhonemeStartIndex: number
    engPhonemeEndIndex: number
}

interface EngScriptDisplayProps {
    engScript: string
}

const ThaiScriptDisplay: React.FC<ThaiScriptDisplayProps> = ({
    enteredText,
    lastEnteredLetter,
    thaiScript,
    thaiPhonemeStartIndex,
    thaiPhonemeEndIndex,
    backspacesRequired,
}) => {
    let highlightEnteredTextStartIndex = enteredText.length;
    if (backspacesRequired > 0) {
        highlightEnteredTextStartIndex -= backspacesRequired - 1;
    }

    let isCompoundLetter = backspacesRequired > 1
        ? compoundLetters.includes(enteredText[highlightEnteredTextStartIndex])
        : compoundLetters.includes(lastEnteredLetter);
    while (isCompoundLetter && highlightEnteredTextStartIndex > 0) {
        highlightEnteredTextStartIndex--;
        isCompoundLetter = compoundLetters.includes(enteredText[highlightEnteredTextStartIndex]);
    }

    const letterHighlightColour = backspacesRequired > 0 ? '#FF6161' : '#00ff00';
    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '45%',
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
            <Box component='span'>
                {enteredText.slice(0, highlightEnteredTextStartIndex)}
            </Box>
            <Box component='span' sx={{ color: letterHighlightColour }}>
                {`${enteredText.slice(highlightEnteredTextStartIndex)}${lastEnteredLetter}`}
            </Box>
            <Box component='span' sx={{ ...styles?.blinkingCursor }}>
                |
            </Box>
        </Grid>
    );
};

const EngPhonemeScriptDisplay: React.FC<EngPhonemeScriptDisplayProps> = ({
    engPhonemeScript,
    engPhonemeStartIndex,
    engPhonemeEndIndex,
}) => {
    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '25%',
            }}
        >
            <Box component='span'>
                {engPhonemeScript.slice(0, engPhonemeStartIndex)}
            </Box>
            <Box component='span' sx={{ background: '#ffffe0', color: 'black' }}>
                {engPhonemeScript.slice(engPhonemeStartIndex, engPhonemeEndIndex)}
            </Box>
            <Box component='span'>
                {engPhonemeScript.slice(engPhonemeEndIndex)}
            </Box>
        </Grid>
    );
};

const EngScriptDisplay: React.FC<EngScriptDisplayProps> = ({ engScript }) => {
    return (
        <Grid
            item
            sx={{
                ...styles?.textBox,
                height: '25%',
            }}
        >
            {engScript}
        </Grid>
    );
};

const TextDisplay: React.FC<TextDisplayProps> = ({
    enteredText,
    lastLetter,
    thaiScript,
    engScript,
    engPhonemeScript,
    engPhonemeStartIndex,
    engPhonemeEndIndex,
    thaiPhonemeStartIndex,
    thaiPhonemeEndIndex,
    backspacesRequired,
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
                    backspacesRequired={backspacesRequired}
                />
                <EngPhonemeScriptDisplay
                    engPhonemeScript={engPhonemeScript}
                    engPhonemeStartIndex={engPhonemeStartIndex}
                    engPhonemeEndIndex={engPhonemeEndIndex}
                />
                <EngScriptDisplay engScript={engScript} />
            </Grid>
        </Box>
    );
};

export default TextDisplay;
