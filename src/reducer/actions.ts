export const TEST_ACTION = 'TEST_ACTION';
export const KEY_DOWN = 'KEY_DOWN';
export const KEY_UP = 'KEY_UP';

interface TestData {
    type: typeof TEST_ACTION
    payload: { testText: string }
}

interface KeyDown {
    type: typeof KEY_DOWN
    payload: { key: string }
}

interface KeyUp {
    type: typeof KEY_UP
    payload: { key: string }
}

export type ActionTypes =
    | TestData
    | KeyDown
    | KeyUp;

export function testAction (testText: string): TestData {
    return {
        type: TEST_ACTION,
        payload: { testText }
    };
}

export function keyDown (key: string): KeyDown {
    return {
        type: KEY_DOWN,
        payload: { key }
    };
}

export function keyUp (key: string): KeyUp {
    return {
        type: KEY_UP,
        payload: { key }
    };
}
