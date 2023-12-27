import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, useMediaQuery } from '@mui/material';

import KeyboardKey from '../KeyboardKey/index';
import {
    keyboardRows,
    keyboardRowsM,
    keyboardRowsShift,
    keyboardRowsShiftM,
} from './constants';

import type { KeyboardKeyProps } from '../KeyboardKey/KeyboardKey';

import styles from './KeyboardLayout.styles';
import ReducerContext from '../../../reducer/reducerContext';

interface KeyboardRowKey {
    keyProps: KeyboardKeyProps
    size?: number
}

interface KeyboardRowProps {
    keyboardKeys: KeyboardRowKey[]
    isCapsOn: boolean
    isMobile: boolean
    pressedKeys?: Record<string, boolean>
};

interface KeyboardLayoutProps {
    pressedKeys: Record<string, boolean>
    isCapsOn: boolean
}

const KeyboardRow: React.FC<KeyboardRowProps> = ({
    isCapsOn,
    isMobile,
    keyboardKeys,
    pressedKeys = {},
}) => {
    const { state } = useContext(ReducerContext);
    const { suggestedKey } = state;
    let keyToHighlight = suggestedKey.key;
    if (isCapsOn !== suggestedKey.isCaps) {
        keyToHighlight = isMobile ? 'capslock' : 'shift';
    }

    return (
        <Grid
            container
            spacing={{
                xs: 0.5,
                md: 1,
            }}
            justifyContent={isMobile ? 'center' : 'space-between'}
        >
            {keyboardKeys.map(({ keyProps, size }, idx) => (
                <Grid
                    key={`${keyProps.mainText}_${idx}`}
                    item
                    xs={size}
                >
                    <KeyboardKey
                        {...keyProps}
                        isPressed={pressedKeys[keyProps.mainText] || pressedKeys[keyProps.subText ?? '']}
                        isSuggested={keyToHighlight === keyProps.subText || keyToHighlight === keyProps.value}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

const KeyboardLayout: React.FC<KeyboardLayoutProps> = ({
    pressedKeys,
    isCapsOn,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const currentKeyboardRows = isMobile
        ? (isCapsOn ? keyboardRowsShiftM : keyboardRowsM)
        : (isCapsOn ? keyboardRowsShift : keyboardRows);

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
                        isMobile={isMobile}
                        keyboardKeys={row.keyboardKeys}
                        pressedKeys={pressedKeys}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default KeyboardLayout;
