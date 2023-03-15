import { type SxProps } from '@mui/system';

const styles: Record<string, SxProps> = {
    key: {
        position: 'relative',
        height: { xs: '2em', md: '3em' },
        border: 'solid grey',
        borderWidth: { xs: '0.5px', md: '2px' },
        borderRadius: { xs: '4px', md: '8px' },
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
};

export default styles;
