import { type SxProps } from '@mui/system';

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
    phonemeHighlightEnglish: {
        background: '#E7CBA9',
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
