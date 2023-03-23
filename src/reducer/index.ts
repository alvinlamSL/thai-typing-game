import { type Reducer } from 'react';
import produce from 'immer';

import { type State } from './state';
import { type ActionTypes, TEST_ACTION, KEY_DOWN, KEY_UP } from './actions';

export const reducer: Reducer<State, ActionTypes> = (state, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            return produce(state, (draft) => {
                draft.testText = action.payload.testText;
                return draft;
            });
        }
        case KEY_DOWN: {
            return produce(state, (draft) => {
                const { key } = action.payload;

                draft.pressedKeys = [
                    ...state.pressedKeys,
                    key.toLowerCase()
                ];

                if (key.toLowerCase() === 'capslock') {
                    draft.capsLockOn = true;
                }

                if (key.toLowerCase() === 'shift') {
                    draft.capsLockOn = true;
                }

                return draft;
            });
        }
        case KEY_UP: {
            return produce(state, (draft) => {
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
        }
    }
};
