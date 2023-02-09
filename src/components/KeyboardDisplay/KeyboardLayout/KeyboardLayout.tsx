import React from 'react';
import { Grid } from '@mui/material';

import KeyboardKey from '../KeyboardKey';
import { keyboardRows } from './constants';

import type { KeyboardKeyProps } from '../KeyboardKey/KeyboardKey';

interface KeyboardRowKey {
    keyProps: KeyboardKeyProps
    size?: number
}

export interface KeyboardRowProps {
    keyboardKeys: KeyboardRowKey[]
};

const KeyboardRow: React.FC<KeyboardRowProps> = ({ keyboardKeys }) => {
    return (
        <Grid container spacing={1} justifyContent="space-between">
            {keyboardKeys.map(({ keyProps, size }) => (
                <Grid
                    key={keyProps.mainText}
                    item
                    xs={size}
                >
                    <KeyboardKey {...keyProps} />
                </Grid>
            ))}
        </Grid>
    );
};

const KeyboardLayout: React.FC = () => {
    return (
        <Grid container rowSpacing={0.5} direction="column">
            {keyboardRows.map((row, idx) => (
                <Grid item key={idx}>
                    <KeyboardRow keyboardKeys={row.keyboardKeys}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default KeyboardLayout;
