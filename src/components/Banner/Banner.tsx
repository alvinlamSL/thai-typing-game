import React, { useContext } from 'react';

import { Box } from '@mui/system';
import {
    AppBar,
    Grid,
    Toolbar,
    Typography
} from '@mui/material';
import LessonDropdown from './LessonDropdown/index';

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
                    <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <LessonDropdown/>
                        </Grid>
                        <Grid item>
                            <Typography
                                sx={{ ...styles.title }}
                                fontWeight="bold"
                                noWrap
                                component="div"
                            >
                                {lessonTitle}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Banner;
