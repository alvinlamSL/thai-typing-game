export interface State {
    testText: string
    pressedKeys: string[]
    capsLockOn: boolean
    shiftKeyDown: boolean
};

export const initialState: State = {
    testText: '',
    pressedKeys: [],
    capsLockOn: false,
    shiftKeyDown: false,
};
