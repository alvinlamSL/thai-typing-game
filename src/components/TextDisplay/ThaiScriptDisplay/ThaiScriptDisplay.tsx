import React from 'react';
import { Box } from '@mui/system';
import { FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material';

import { compoundLetters } from '../constants';

import styles from './ThaiScriptDisplay.styles';

export interface ThaiScriptDisplayProps {
    enteredText: string
    thaiScript: string
    thaiPhonemeStartIndex: number
    thaiPhonemeEndIndex: number
    backspacesRequired: number
}

const ThaiScriptDisplay: React.FC<ThaiScriptDisplayProps> = ({
    enteredText,
    thaiScript,
    thaiPhonemeStartIndex,
    thaiPhonemeEndIndex,
    backspacesRequired,
}) => {
    let actualThaiScript = thaiScript;
    if (backspacesRequired > 0) {
        const start = thaiScript.slice(0, enteredText.length - backspacesRequired);
        const error = enteredText.slice(-backspacesRequired);
        const end = thaiScript.slice(enteredText.length - backspacesRequired);
        actualThaiScript = start + error + end;
    }

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

    const inputLabel = 'Follow the gray text';
    return (
        <Grid item>
            <FormControl
                fullWidth
                variant="outlined"
                focused
            >
                <InputLabel
                    sx={{ ...styles?.thaiTextFieldLabel }}
                    shrink
                >
                    {inputLabel}
                </InputLabel>
                <OutlinedInput
                    sx={{ ...styles?.thaiTextFieldOutline }}
                    notched
                    label={inputLabel}
                    readOnly
                    color='primary'
                    autoFocus
                />
                <Box sx={{ ...styles?.thaiTextField }}>
                    {/* If there's no error, highlight the phoneme */}
                    {backspacesRequired === 0 && enteredText.length < thaiScript.length && (
                        <Box sx={{ ...styles?.phonemeHighlightText }}>
                            <Box component='span'>
                                {thaiScript.slice(0, thaiPhonemeStartIndex)}
                            </Box>
                            <Box component='span' sx={{ ...styles?.phonemeHighlightThai }}>
                                {thaiScript.slice(thaiPhonemeStartIndex, thaiPhonemeEndIndex)}
                            </Box>
                        </Box>
                    )}
                    <Box sx={{ ...styles.thaiFrontText }}>
                        <Box component='span' sx={{ color: 'green' }}>
                            {enteredText.slice(0, highlightEnteredTextStartIndex)}
                        </Box>
                        <Box component='span' sx={
                            backspacesRequired > 0
                                ? { ...styles?.textHighlightError }
                                : { ...styles?.textHighlight }
                        }>
                            {enteredText.slice(highlightEnteredTextStartIndex)}
                        </Box>
                    </Box>
                    <Box sx={{ ...styles.thaiGhostText }}>
                        <Box component='span'>
                            {actualThaiScript}
                        </Box>
                    </Box>
                </Box>
            </FormControl>
        </Grid>
    );
};

export default ThaiScriptDisplay;
