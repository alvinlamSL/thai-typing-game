import React, { useContext } from 'react';

import { Box } from '@mui/system';
import {
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';

import ReducerContext from '../../reducer/reducerContext';

import styles from './Banner.styles';

const Banner: React.FC = () => {
    const { state } = useContext(ReducerContext);
    const { lessonTitle } = state;

    return (
        <Box
            sx={{
                ...styles?.main,
            }}
        >
            <AppBar position="static">
                <Toolbar
                    sx={{ ...styles.toolbar }}
                >
                    <Typography
                        sx={{ ...styles.title }}
                        fontWeight="bold"
                        noWrap
                        component="div"
                    >
                        {lessonTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Banner;
