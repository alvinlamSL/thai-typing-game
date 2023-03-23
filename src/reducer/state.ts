export interface State {
    testText: string
    pressedKeys: string[]
    tappedKeys: string[]
    capsLockOn: boolean
    shiftKeyDown: boolean
};

export const initialState: State = {
    testText: '',
    pressedKeys: [],
    tappedKeys: [],
    capsLockOn: false,
    shiftKeyDown: false,
};
