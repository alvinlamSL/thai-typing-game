import { type SxProps } from '@mui/system';
import { keyframes } from '@mui/system';

const blink = keyframes`from,to{color:transparent}50%{color:#000}`;

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
        color: '#B30000'
    },
    phonemeHighlightEnglish: {
        background: '#E7CBA9',
    },
    phonemeHighlightThai: {
        background: '#E7CBA9',
        color: '#E7CBA9',
    },
    thaiGhostText: {
        opacity: '30%',
    },
    thaiFrontText: {
        position: 'absolute',
    },
    phonemeHighlightText: {
        position: 'absolute',
        color: 'white',
    },
    thaiTextField: {
        fontSize: { xs: '1.5em', md: '1.7em' },
        position: 'absolute',
        padding: 1,
    },
    thaiTextFieldLabel: {
        color: '#1976D2',
    },
    thaiTextFieldOutline: {
        '& fieldset': {
            borderColor: '#1976D2',
            borderWidth: '2px',
        },
    }
};

export default styles;
