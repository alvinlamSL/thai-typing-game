import { type SxProps } from '@mui/system';

const styles: Record<string, SxProps> = {
    phonemeHighlightThai: {
        background: '#E7CBA9',
        color: 'transparent',
    },
    thaiGhostText: {
        opacity: '30%',
        overflow: 'hidden',
    },
    thaiFrontText: {
        maxWidth: '800px',
        position: 'absolute',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    phonemeHighlightText: {
        maxWidth: '800px',
        position: 'absolute',
        color: 'white',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    thaiTextField: {
        fontSize: { xs: '1.5em', md: '1.7em' },
        position: 'absolute',
        padding: 1,
    },
    thaiTextFieldLabel: {
        color: '#1976D2',
        fontSize: '1.3em',
        lineHeight: '0.8em',
        height: '1.3em',
    },
    thaiTextFieldOutline: {
        '& fieldset': {
            borderColor: '#1976D2',
            borderWidth: '2px',
            fontSize: '1.3em',
        },
    },
    textHighlight: {
        color: '#006600'
    },
    textHighlightError: {
        color: '#B30000',
        textDecorationLine: 'underline',
        textDecorationStyle: 'wavy',
        textDecorationColor: 'red',
        textDecorationThickness: '1.2px',
    },
};

export default styles;
