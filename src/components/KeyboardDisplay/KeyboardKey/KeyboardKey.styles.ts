import { type SxProps } from '@mui/system';

const styles: Record<string, SxProps> = {
    key: {
        position: 'relative',
        height: { xs: '2.5em', md: '3em' },
        border: 'solid grey',
        borderWidth: { xs: '0.5px', md: '2px' },
        borderRadius: { xs: '4px', md: '8px' },
        background: '#DCD3FF',
        '&:hover': {
            cursor: { md: 'pointer' },
            color: { md: 'red' },
            backgroundColor: { md: 'white' },
        },
        '&:active': {
            cursor: 'pointer',
            background: '#B3A0FF',
        },
    },
    keyPressed: {
        position: 'relative',
        height: { xs: '2.5em', md: '3em' },
        border: 'solid grey',
        borderWidth: { xs: '0.5px', md: '2px' },
        borderRadius: { xs: '4px', md: '8px' },
        background: '#B3A0FF',
    },
    keySuggested: {
        position: 'relative',
        height: { xs: '2.5em', md: '3em' },
        border: 'solid grey',
        borderWidth: { xs: '0.5px', md: '2px' },
        borderRadius: { xs: '4px', md: '8px' },
        background: 'orange',
        '&:hover': {
            cursor: { md: 'pointer' },
            color: { md: 'red' },
            backgroundColor: { md: 'white' },
        },
        '&:active': {
            cursor: 'pointer',
            background: '#B3A0FF',
        },
    },
    mainText: {
        position: 'relative',
        top: { xs: '35%', md: '35%' },
        fontWeight: { xs: 'normal', md: 'bold' },
        fontSize: { xs: '0.8em', md: '1em' },
    },
    subText: {
        position: 'absolute',
        top: '0px',
        left: '5px',
        fontSize: { xs: '0.6em', md: '0.7em' },
    },
    iconContainer: {
        position: 'relative',
        top: '27%',
    },
    icon: {
        fontSize: '0.8em',
    }
};

export default styles;
