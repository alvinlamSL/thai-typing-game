import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import { compoundLetters } from './constants';

import ReducerContext from '../../reducer/reducerContext';

import styles from './TextDisplay.styles';

interface ThaiScriptDisplayProps {
    enteredText: string
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
    thaiScript,
    thaiPhonemeStartIndex,
    thaiPhonemeEndIndex,
    backspacesRequired,
}) => {
    let highlightEnteredTextStartIndex = enteredText.length;
    if (backspacesRequired > 0) {
        highlightEnteredTextStartIndex -= backspacesRequired;
    }

    let isCompoundLetter =
        compoundLetters.includes(enteredText[highlightEnteredTextStartIndex]);

    while (isCompoundLetter && highlightEnteredTextStartIndex > 0) {
        highlightEnteredTextStartIndex--;
        isCompoundLetter = compoundLetters.includes(enteredText[highlightEnteredTextStartIndex]);
    }

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
            <Box component='span' sx={{ ...styles?.phonemeHighlight }}>
                {thaiScript.slice(thaiPhonemeStartIndex, thaiPhonemeEndIndex)}
            </Box>
            <Box component='span'>
                {thaiScript.slice(thaiPhonemeEndIndex)}
            </Box>
            <div/>
            <Box component='span'>
                {enteredText.slice(0, highlightEnteredTextStartIndex)}
            </Box>
            <Box component='span' sx={
                backspacesRequired > 0
                    ? { ...styles?.textHighlightError }
                    : { ...styles?.textHighlight }
            }>
                {enteredText.slice(highlightEnteredTextStartIndex)}
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
            <Box component='span' sx={{ ...styles?.phonemeHighlight }}>
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

const TextDisplay: React.FC = () => {
    const { state } = useContext(ReducerContext);

    const {
        backspacesRequired,
        enteredText,
        engPhonemeStartEndList,
        thaiPhonemeStartEndList,
        engPhonemeScripts,
        engScripts,
        currScriptIndex,
        currPhonemeIndex,
        currThaiScript,
    } = state;

    const {
        start: engPhonemeStartIndex,
        end: engPhonemeEndIndex
    } = engPhonemeStartEndList[currPhonemeIndex] ?? { start: 0, end: 0 };

    const {
        start: thaiPhonemeStartIndex,
        end: thaiPhonemeEndIndex
    } = thaiPhonemeStartEndList[currPhonemeIndex] ?? { start: 0, end: 0 };

    return (
        <Box
            sx={{ ...styles?.main }}
        >
            <Grid container sx={{ height: '100%' }}>
                <ThaiScriptDisplay
                    enteredText={enteredText}
                    thaiScript={currThaiScript}
                    thaiPhonemeStartIndex={thaiPhonemeStartIndex}
                    thaiPhonemeEndIndex={thaiPhonemeEndIndex}
                    backspacesRequired={backspacesRequired}
                />
                <EngPhonemeScriptDisplay
                    engPhonemeScript={engPhonemeScripts[currScriptIndex]}
                    engPhonemeStartIndex={engPhonemeStartIndex}
                    engPhonemeEndIndex={engPhonemeEndIndex}
                />
                <EngScriptDisplay engScript={engScripts[currScriptIndex]} />
            </Grid>
        </Box>
    );
};

export default TextDisplay;
