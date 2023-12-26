import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import React, { useState } from 'react';

const localStorageIntroStatusKey = 'intro_status';
const Intro: React.FC = () => {
    // check if user has previously seen intro
    const introStatus = JSON.parse(localStorage.getItem(localStorageIntroStatusKey) ?? '{}');
    const [showDialog, setShowDialog] = useState(!introStatus?.isRead ?? true);

    const onAccept = (): void => {
        const introData = { isRead: true };
        localStorage.setItem(localStorageIntroStatusKey, JSON.stringify(introData));
        setShowDialog(false);
    };

    return (
        <Dialog open={showDialog}>
            <DialogTitle>
                Welcome to Thai Typing
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Here you will practice typing in thai and learn new thai words.
                    Just follow the <span style={{ background: 'orange' }}>highlighted</span> keys on the screen.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onAccept}>Continue</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Intro;
