import { type Reducer } from 'react';
import produce from 'immer';

import type { State } from './state';
import type { ActionTypes } from './actions';

import {
    TEST_ACTION,
    KEY_DOWN,
    KEY_UP,
    KEY_TAP,
    SET_LESSON
} from './actions';

import {
    keyList,
    keyListShift,
    reverseLetterMap,
    reverseLetterMapCaps,
} from './constants';

import { splitPhonemeScript } from './utils';

export const reducer: Reducer<State, ActionTypes> = (state, action) => {
    let newState = state;
    let pressedKey: string = '';
    switch (action.type) {
        case TEST_ACTION: {
            newState = produce(state, (draft) => {
                draft.testText = action.payload.testText;
                return draft;
            });
            break;
        }
        case KEY_DOWN: {
            pressedKey = action.payload.key;
            newState = produce(state, (draft) => {
                const { key } = action.payload;

                draft.pressedKeys = [
                    ...state.pressedKeys,
                    key.toLowerCase()
                ];

                // If caps lock pressed
                if (key.toLowerCase() === 'capslock') {
                    draft.capsLockOn = true;
                }

                // If shift key pressed
                if (key.toLowerCase() === 'shift') {
                    draft.capsLockOn = true;
                }

                return draft;
            });
            break;
        }
        case KEY_UP: {
            newState = produce(state, (draft) => {
                const { key } = action.payload;

                draft.pressedKeys = state.pressedKeys.filter((item) => (
                    item !== key.toLowerCase()
                ));

                if (key.toLowerCase() === 'capslock') {
                    draft.capsLockOn = false;
                }

                if (key.toLowerCase() === 'shift') {
                    draft.capsLockOn = false;
                }

                return draft;
            });
            break;
        }
        case KEY_TAP: {
            pressedKey = action.payload.key;
            newState = produce(state, (draft) => {
                const { key } = action.payload;

                draft.tappedKeys = [
                    ...state.tappedKeys,
                    key.toLowerCase()
                ];

                if (key.toLowerCase() === 'capslock') {
                    draft.capsLockOn = !state.capsLockOn;
                }

                return draft;
            });
            break;
        }
        case SET_LESSON: {
            newState = produce(state, (draft) => {
                const {
                    title,
                    engScripts,
                    engPhonemeScripts,
                    thaiPhonemeScripts,
                } = action.payload.lesson;

                draft.lessonTitle = title;
                draft.engScripts = engScripts;
                draft.engPhonemeScripts = engPhonemeScripts;
                draft.thaiPhonemeScripts = thaiPhonemeScripts;
                draft.currScriptIndex = 0;

                return draft;
            });
            break;
        }
    }

    // Handle changes if a key was pressed
    // NOTE: capslock/shiftkey handled by KEY_DOWN/KEY_TAP
    if (pressedKey) {
        newState = produce(newState, (draft) => {
            // If backspace pressed
            if (pressedKey.toLowerCase() === 'backspace') {
                draft.enteredText = state.enteredText.slice(0, -1);
                if (newState.backspacesRequired > 0) {
                    draft.backspacesRequired--;
                }
            }

            // If enter pressed
            if (pressedKey.toLowerCase() === 'enter') {
                if (newState.currThaiLetterIndex === state.currThaiScript.length) {
                    draft.currScriptIndex++;
                }
            }

            // If any other valid key was pressed
            if (keyList[pressedKey]) {
                const { shiftKeyDown, capsLockOn } = newState;
                const currKeyList = (shiftKeyDown !== capsLockOn)
                    ? keyListShift
                    : keyList;
                // update entered text
                draft.enteredText += currKeyList[pressedKey].displayValue;
            }

            return draft;
        });
    }

    // Handle text deleted (backspace)
    if (state.enteredText.length > newState.enteredText.length) {
        newState = produce(newState, (draft) => {
            // Check updates to thai letter index
            const lastLetterRemoved =
                state.enteredText[state.enteredText.length - 1];
            const shouldDecreaseThaiLetterIndex = (
                (state.currThaiLetterIndex > 0) &&
                (state.backspacesRequired === 0) &&
                (lastLetterRemoved === (
                    state.currThaiScript[state.currThaiLetterIndex - 1]
                ))
            );
            if (shouldDecreaseThaiLetterIndex) {
                draft.currThaiLetterIndex--;
            }

            // Check updates to phoneme index
            const { currPhonemeIndex, thaiPhonemeStartEndList } = state;
            const thaiPhonemeStartIndex = thaiPhonemeStartEndList[currPhonemeIndex].start;
            if (draft.currThaiLetterIndex < thaiPhonemeStartIndex) {
                draft.currPhonemeIndex--;
            }

            return draft;
        });
    }

    // Handle text added
    if (state.enteredText.length < newState.enteredText.length) {
        newState = produce(newState, (draft) => {
            const {
                backspacesRequired,
                currThaiLetterIndex,
                currThaiScript,
                enteredText,
            } = newState;
            const correctThaiLetter = currThaiScript[currThaiLetterIndex];
            const lastEnteredKey = enteredText[enteredText.length - 1];

            if (backspacesRequired === 0 && correctThaiLetter === lastEnteredKey) {
                // correct key pressed
                draft.currThaiLetterIndex++;
            } else {
                // incorrect key pressed
                draft.backspacesRequired++;
            }

            // Check updates to phoneme index
            const { currPhonemeIndex, thaiPhonemeStartEndList } = state;
            const thaiPhonemeEndIndex = thaiPhonemeStartEndList[currPhonemeIndex].end;
            if (
                draft.currThaiLetterIndex >= thaiPhonemeEndIndex &&
                draft.currPhonemeIndex < draft.engPhonemeStartEndList.length - 1
            ) {
                draft.currPhonemeIndex++;
            }
        });
    }

    // Handle new script or lesson change
    if (
        state.currScriptIndex !== newState.currScriptIndex ||
        state.lessonTitle !== newState.lessonTitle
    ) {
        // reset everything
        if (newState.currScriptIndex < newState.engScripts.length) {
            const {
                currScriptIndex,
                thaiPhonemeScripts,
                engPhonemeScripts,
            } = newState;
            newState = produce(newState, (draft) => {
                draft.enteredText = '';
                draft.backspacesRequired = 0;
                draft.currPhonemeIndex = 0;
                draft.currThaiLetterIndex = 0;
                draft.currThaiScript = thaiPhonemeScripts[currScriptIndex].replaceAll('.', '');
                draft.engPhonemeStartEndList = splitPhonemeScript(engPhonemeScripts[currScriptIndex]);
                draft.thaiPhonemeStartEndList = splitPhonemeScript(thaiPhonemeScripts[currScriptIndex], true);
            });
        } else {
            // If end of lesson, don't advance
            newState = produce(newState, (draft) => {
                draft.currScriptIndex = state.currScriptIndex;
            });
        }
    }

    // Update suggested key
    if (
        state.currThaiLetterIndex !== newState.currThaiLetterIndex ||
        state.currScriptIndex !== newState.currScriptIndex ||
        state.backspacesRequired !== newState.backspacesRequired
    ) {
        newState = produce(newState, (draft) => {
            const {
                backspacesRequired,
                currThaiLetterIndex,
                currThaiScript
            } = newState;
            const currThaiScriptLetter = currThaiScript[currThaiLetterIndex];

            if (backspacesRequired) {
                draft.suggestedKey.key = 'backspace';
                draft.suggestedKey.isCaps = false;
            } else if (reverseLetterMap[currThaiScriptLetter]) {
                draft.suggestedKey.key = reverseLetterMap[currThaiScriptLetter];
                draft.suggestedKey.isCaps = false;
            } else if (reverseLetterMapCaps[currThaiScriptLetter]) {
                draft.suggestedKey.key = reverseLetterMapCaps[currThaiScriptLetter];
                draft.suggestedKey.isCaps = true;
            } else {
                draft.suggestedKey.key = '';
                draft.suggestedKey.isCaps = false;
            }

            return draft;
        });
    }

    return newState;
};
