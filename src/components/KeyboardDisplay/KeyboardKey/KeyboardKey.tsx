import React, { type ReactElement } from 'react';
import { Box } from '@mui/system';

import BackspaceIcon from '@mui/icons-material/BackspaceOutlined';
import EnterIcon from '@mui/icons-material/KeyboardReturn';
import CapsIcon from '@mui/icons-material/ArrowUpward';

import styles from './KeyboardKey.styles';

export interface KeyboardKeyProps {
    mainText: string
    iconName?: string
    subText?: string
    isPressed?: boolean
    isSuggested?: boolean
}

const iconMap: Record<string, ReactElement> = {
    backspace: <BackspaceIcon style={{ fontSize: '1em' }} />,
    enter: <EnterIcon style={{ fontSize: '1em' }} />,
    capslock: <CapsIcon style={{ fontSize: '1em' }} />,
};

const KeyboardKey: React.FC<KeyboardKeyProps> = ({
    mainText,
    iconName,
    subText,
    isPressed = false,
    isSuggested = false,
}) => {
    const bgColor = isPressed
        ? '#B3A0FF'
        : (isSuggested ? 'orange' : '#DCD3FF');

    const KeyIcon = iconName ? iconMap[iconName] : <div/>;

    return (
        <Box
            sx={{
                ...styles.key,
                background: bgColor
            }}
        >
            {iconName && (
                <Box sx={{ ...styles.iconContainer }}>{KeyIcon}</Box>
            )}
            {!iconName && (
                <>
                    <Box sx={{ ...styles.mainText }}>{mainText}</Box>
                    <Box sx={{ ...styles.subText }}>{subText ?? ''}</Box>
                </>
            )}
        </Box>
    );
};

export default KeyboardKey;
