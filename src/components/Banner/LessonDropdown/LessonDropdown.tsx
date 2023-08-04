import React, { useState } from 'react';

import {
    MenuItem,
    TextField
} from '@mui/material';

import styles from './LessonDropdown.styles';

interface LessonDropdownProps {
    lessons: string[]
    onSelect: (lessonId: number) => void
}

const LessonDropdown: React.FC<LessonDropdownProps> = ({
    lessons,
    onSelect,
}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const inputLabel = 'Select Lesson';
    return (
        <TextField
            sx={{ ...styles.select }}
            select
            label={inputLabel}
            value=''
            variant='standard'
            InputLabelProps={{ shrink: false }}
            SelectProps={{
                open: isDropdownOpen,
                onOpen: (e) => {
                    if (e.type !== 'keydown') {
                        setDropdownOpen(true);
                    }
                },
                onClose: () => { setDropdownOpen(false); }
            }}
        >
            {lessons.map((lesson, idx) => (
                <MenuItem
                    key={idx}
                    value={idx}
                    onClick={() => { onSelect(idx); }}
                >
                    {lesson}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default LessonDropdown;
