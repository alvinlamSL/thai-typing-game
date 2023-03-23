import { type Reducer } from 'react';
import produce from 'immer';

import { type State } from './state';
import { type ActionTypes, TEST_ACTION } from './actions';

export const reducer: Reducer<State, ActionTypes> = (state, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            return produce(state, (draft) => {
                draft.testText = action.payload.testText;
                return draft;
            });
        }
    }
};
