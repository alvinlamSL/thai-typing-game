import React from 'react';
import { Grid } from '@mui/material';

import KeyboardKey from '../KeyboardKey';
import { keyboardRows } from './constants';

import type { KeyboardKeyProps } from '../KeyboardKey/KeyboardKey';

import styles from './KeyboardLayout.styles';

interface KeyboardRowKey {
    keyProps: KeyboardKeyProps
    size?: number
}

export interface KeyboardRowProps {
    keyboardKeys: KeyboardRowKey[]
    pressedKeys?: Record<string, boolean>
};

interface KeyboardLayoutProps {
    pressedKeys: Record<string, boolean>
}

const KeyboardRow: React.FC<KeyboardRowProps> = ({ keyboardKeys, pressedKeys = {} }) => {
    return (
        <Grid container spacing={1} justifyContent="space-between">
            {keyboardKeys.map(({ keyProps, size }, idx) => (
                <Grid
                    key={`${keyProps.mainText}_${idx}`}
                    item
                    xs={size}
                >
                    <KeyboardKey
                        {...keyProps}
                        isPressed={pressedKeys[keyProps.mainText] || pressedKeys[keyProps.subText ?? '']}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

const KeyboardLayout: React.FC<KeyboardLayoutProps> = ({ pressedKeys }) => {
    return (
        <Grid
            container
            rowSpacing={0.5}
            direction="column"
            sx={{ ...styles.main }}
        >
            {keyboardRows.map((row, idx) => (
                <Grid item key={idx}>
                    <KeyboardRow
                        keyboardKeys={row.keyboardKeys}
                        pressedKeys={pressedKeys}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default KeyboardLayout;
