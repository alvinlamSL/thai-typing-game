import { type SxProps } from '@mui/system';

const styles: Record<string, SxProps> = {
    inputLabel: {
        fontSize: { xs: '0.8em' },
        color: 'white',
        '& .Mui-focused': {
            color: 'white',
        }
    },
    select: {
        minWidth: {
            xs: '110px',
            md: '130px',
        },
        '& .MuiSelect-select': {
            padding: '4px 0 2px',
        },
        '& .MuiFormLabel-root': {
            fontSize: {
                xs: '0.8em',
                md: '1em',
            },
            color: 'white',
        },
        '&:after .MuiInput-root.MuiInput-underline': {
            borderColor: 'black',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white'
        },
    },
};

export default styles;
