import { type SxProps } from '@mui/system';
import { keyframes } from '@mui/system';

const blink = keyframes`from,to{color:transparent}50%{color:#000}`;

const styles: Record<string, SxProps> = {
    main: {
        height: 'calc(40vh - 60px - 32px)',
        padding: { xs: 1, md: 2 },
    },
    textBox: {
        width: '100%',
        borderWidth: '2px',
        borderRadius: '8px',
        textAlign: 'left',
        padding: 1,
        border: {
            xs: '1px solid gray',
            md: '1.5px solid gray',
        },
        fontSize: { xs: '1em', md: '1.2em' },
    },
    blinkingCursor: {
        animation: `${blink} 1s steps(5,start) infinite`,
    },
    textHighlight: {
        color: '#006600'
    },
    textHighlightError: {
        color: '#B30000'
    },
    phonemeHighlight: {
        background: '#E7CBA9',
        color: 'black',
    },
};

export default styles;
