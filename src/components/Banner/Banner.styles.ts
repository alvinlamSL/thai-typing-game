import { type SxProps } from '@mui/system';

const styles: Record<string, SxProps> = {
    main: {
        height: '120px',
    },
    toolbar: {
        height: '120px',
        backgroundColor: 'cornflowerblue',
    },
    title: {
        alignSelf: 'flex-end',
        padding: 1,
        fontSize: {
            xs: '1.25rem',
            md: '1.5rem',
        },
        lineHeight: {
            xs: '1.6',
            md: '1.334',
        },
        letterSpacing: {
            xs: '0.0075em',
            md: '0em'
        },
    }
};

export default styles;
