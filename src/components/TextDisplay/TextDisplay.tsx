import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material';

import ThaiScriptDisplay from './ThaiScriptDisplay';
import ReducerContext from '../../reducer/reducerContext';

import styles from './TextDisplay.styles';

interface EngPhonemeScriptDisplayProps {
    engPhonemeScript: string
    engPhonemeStartIndex: number
    engPhonemeEndIndex: number
}

interface EngScriptDisplayProps {
    engScript: string
}

const EngPhonemeScriptDisplay: React.FC<EngPhonemeScriptDisplayProps> = ({
    engPhonemeScript,
    engPhonemeStartIndex,
    engPhonemeEndIndex,
}) => {
    const inputLabel = 'English pronunciation';
    return (
        <Grid item>
            <FormControl
                fullWidth
                variant="outlined"
                disabled
            >
                <InputLabel shrink>
                    {inputLabel}
                </InputLabel>
                <OutlinedInput
                    sx={{ ...styles?.textFieldInput }}
                    notched
                    label={inputLabel}
                    readOnly
                />
                <Box sx={{ ...styles?.textField }}>
                    <Box component='span'>
                        {engPhonemeScript.slice(0, engPhonemeStartIndex)}
                    </Box>
                    <Box component='span' sx={{ ...styles?.phonemeHighlightEnglish }}>
                        {engPhonemeScript.slice(engPhonemeStartIndex, engPhonemeEndIndex)}
                    </Box>
                    <Box component='span'>
                        {engPhonemeScript.slice(engPhonemeEndIndex)}
                    </Box>
                </Box>
            </FormControl>
        </Grid>
    );
};

const EngScriptDisplay: React.FC<EngScriptDisplayProps> = ({ engScript }) => {
    const inputLabel = 'English definition';
    return (
        <Grid item>
            <FormControl
                fullWidth
                variant="outlined"
                disabled
            >
                <InputLabel shrink>
                    {inputLabel}
                </InputLabel>
                <OutlinedInput
                    sx={{ ...styles?.textFieldInput }}
                    notched
                    label={inputLabel}
                    readOnly
                />
                <Box sx={{ ...styles?.textField }}>
                    {engScript}
                </Box>
            </FormControl>
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
            <Grid
                container
                sx={{ height: '100%' }}
                direction='column'
                rowSpacing={2}
                justifyContent='center'
            >
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
