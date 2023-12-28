import { type SxProps } from '@mui/system';
import { keyframes } from '@mui/system';

const blink = keyframes`
    from,to {
        background-color:transparent
    }
    50% {
        background-color:#E7CBA980
    }
`;

const textBoxStyle = {
    width: '100%',
    borderWidth: '2px',
    borderRadius: '8px',
    textAlign: 'left',
    marginTop: '4px',
    marginBottom: '4px',
    padding: 1,
    border: {
        xs: '1px solid gray',
        md: '1.5px solid gray',
    },
};

const styles: Record<string, SxProps> = {
    main: {
        height: 'calc(40vh - 60px - 32px)',
        minHeight: '200px',
        padding: { xs: 1, md: 2 },
    },
    textBox: {
        ...textBoxStyle,
        fontSize: { xs: '0.8em', md: '1em' },
    },
    blinkingCursor: {
        animation: `${blink} 1s steps(5,start) infinite`,
        position: 'absolute',
        top: { xs: '6px', md: '12px' },
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
    phonemeHighlightEnglish: {
        background: '#E7CBA9',
    },
    phonemeHighlightThai: {
        animation: `${blink} 1s ease-in-out infinite running`,
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
    textFieldInput: {
        '& input': {
            padding: 1,
        },
    },
    textField: {
        fontSize: { xs: '0.8em', md: '1em' },
        position: 'absolute',
        padding: 1,
        top: '4px',
    },
};

export default styles;
