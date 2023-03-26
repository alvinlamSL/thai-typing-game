import React, { useContext } from 'react';

import TextDisplay from './TextDisplay';

import ReducerContext from '../../reducer/reducerContext';

const TextDisplayContainer: React.FC = () => {
    const { state } = useContext(ReducerContext);

    const {
        engPhonemeStartEndList,
        thaiPhonemeStartEndList,
        currPhonemeIndex,
    } = state;

    const {
        start: engPhonemeStartIndex,
        end: engPhonemeEndIndex
    } = engPhonemeStartEndList[currPhonemeIndex] ?? { start: 0, end: 0 };

    const {
        start: thaiPhonemeStartIndex,
        end: thaiPhonemeEndIndex
    } = thaiPhonemeStartEndList[currPhonemeIndex] ?? { start: 0, end: 0 };

    return (
        <TextDisplay
            enteredText={state.enteredText}
            thaiScript={state.currThaiScript}
            engScript={state.engScripts[state.currScriptIndex]}
            engPhonemeScript={state.engPhonemeScripts[state.currScriptIndex]}
            engPhonemeStartIndex={engPhonemeStartIndex}
            engPhonemeEndIndex={engPhonemeEndIndex}
            thaiPhonemeStartIndex={thaiPhonemeStartIndex}
            thaiPhonemeEndIndex={thaiPhonemeEndIndex}
            backspacesRequired={state.backspacesRequired}
        />
    );
};

export default TextDisplayContainer;
