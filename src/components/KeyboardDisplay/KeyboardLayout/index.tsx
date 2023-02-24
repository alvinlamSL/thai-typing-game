import React, { useEffect, useState } from 'react';

import KeyboardLayout from './KeyboardLayout';

const KeyboardLayoutContainer: React.FC = () => {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);

    const handleKeyDown = (event: any): void => {
        setPressedKeys(prevState => [
            ...prevState,
            event.key.toLowerCase()
        ]);
    };

    const handleKeyUp = (event: any): void => {
        setPressedKeys(prevState => prevState.filter((item) => item !== event.key.toLowerCase()));
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const pressedKeysObj: Record<string, boolean> = {};
    pressedKeys.forEach((key) => {
        pressedKeysObj[key] = true;
    });

    return (
        <KeyboardLayout pressedKeys={pressedKeysObj}/>
    );
};

export default KeyboardLayoutContainer;
