import { type SxProps } from '@mui/system';

const styles: Record<string, SxProps> = {
    key: {
        position: 'relative',
        height: '3em',
        background: '#DCD3FF',
        border: 'solid grey',
        borderWidth: '2px',
        borderRadius: '8px',
    },
    mainText: {
        position: 'relative',
        top: '35%',
        fontWeight: 'bold',
    },
    subText: {
        position: 'absolute',
        top: '0px',
        left: '5px',
        fontSize: '0.7em',
    },
};

export default styles;
