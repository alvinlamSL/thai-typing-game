import React from 'react';
import { Grid } from '@mui/material';

import KeyboardKey from '../KeyboardKey';
import { keyboardRows, keyboardRowsShift } from './constants';

import type { KeyboardKeyProps } from '../KeyboardKey/KeyboardKey';

import styles from './KeyboardLayout.styles';

interface KeyboardRowKey {
    keyProps: KeyboardKeyProps
    size?: number
}

interface KeyboardRowProps {
    keyboardKeys: KeyboardRowKey[]
    isCapsOn: boolean
    pressedKeys?: Record<string, boolean>
};

interface KeyboardLayoutProps {
    pressedKeys: Record<string, boolean>
    isCapsOn: boolean
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

const KeyboardLayout: React.FC<KeyboardLayoutProps> = ({ pressedKeys, isCapsOn }) => {
    const currentKeyboardRows = isCapsOn ? keyboardRowsShift : keyboardRows;

    return (
        <Grid
            container
            rowSpacing={0.5}
            direction="column"
            sx={{ ...styles.main }}
        >
            {currentKeyboardRows.map((row, idx) => (
                <Grid item key={idx}>
                    <KeyboardRow
                        isCapsOn={isCapsOn}
                        keyboardKeys={row.keyboardKeys}
                        pressedKeys={pressedKeys}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default KeyboardLayout;
