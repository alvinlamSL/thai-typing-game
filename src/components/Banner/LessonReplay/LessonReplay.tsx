import React, { useContext } from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from '@mui/material';

import ReducerContext from '../../../reducer/reducerContext';
import { replayLesson } from '../../../reducer/actions';

interface ConfirmationDialogProps {
    isOpen: boolean
    onConfirmed?: () => void
    onCancelled?: () => void
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    isOpen,
    onConfirmed = () => {},
    onCancelled = () => {},
}) => {
    return (
        <Dialog open={isOpen}>
            <DialogTitle>
                Replay Lesson?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lesson will restart from the first sentence.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancelled} color='error'>Cancel</Button>
                <Button onClick={onConfirmed}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

const LessonReplay: React.FC = () => {
    const { dispatch, state } = useContext(ReducerContext);
    const { replayLessonState } = state;

    const handleCancelReplay = (): void => {
        dispatch(replayLesson('none'));
    };

    const handleConfirmReplay = (): void => {
        dispatch(replayLesson('confirmed'));
    };

    const handleTriggerReplay = (): void => {
        dispatch(replayLesson('awaiting'));
    };

    return (
        <>
            <ConfirmationDialog
                isOpen={replayLessonState === 'awaiting'}
                onCancelled={handleCancelReplay}
                onConfirmed={handleConfirmReplay}
            />
            <Tooltip title="Replay lesson">
                <IconButton
                    onMouseDown={handleTriggerReplay}
                    size='small'
                >
                    <ReplayIcon htmlColor='white'/>
                </IconButton>
            </Tooltip>
        </>
    );
};

export default LessonReplay;
