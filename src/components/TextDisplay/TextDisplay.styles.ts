import { type SxProps } from '@mui/system';
import { keyframes } from '@mui/system';

const blink = keyframes`from,to{color:transparent}50%{color:#FFF}`;

const styles: Record<string, SxProps> = {
    main: {
        height: 'calc(40vh - 60px - 32px)',
        padding: 2,
    },
    textBox: {
        width: '100%',
        bgcolor: 'black',
        color: 'white',
        borderWidth: '2px',
        borderRadius: '8px',
        textAlign: 'left',
        padding: 2,
        fontSize: '1.2em',
    },
    blinkingCursor: {
        animation: `${blink} 1s steps(5,start) infinite`,
    },
};

export default styles;
