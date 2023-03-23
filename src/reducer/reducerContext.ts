import { createContext, type Dispatch } from 'react';

import { type ActionTypes } from './actions';
import { initialState, type State } from './state';

interface ContextValue {
    state: State
    dispatch: Dispatch<ActionTypes>
};

const defaultValue = {
    state: initialState,
    dispatch: () => {},
};

export const ReducerContext = createContext<ContextValue>(defaultValue);

export default ReducerContext;
