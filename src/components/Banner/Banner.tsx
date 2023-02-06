import React from 'react';
import { Box } from '@mui/system';

import styles from './Banner.styles';

const Banner: React.FC = () => {
    return (
        <Box
            sx={{
                ...styles?.main,
            }}
        >
            Banner
        </Box>
    );
};

export default Banner;
