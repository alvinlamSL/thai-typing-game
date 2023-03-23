export const TEST_ACTION = 'TEST_ACTION';
export const KEY_DOWN = 'KEY_DOWN';
export const KEY_UP = 'KEY_UP';
export const KEY_TAP = 'KEY_TAP';

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

interface KeyTap {
    type: typeof KEY_TAP
    payload: { key: string }
}

export type ActionTypes =
    | TestData
    | KeyDown
    | KeyUp
    | KeyTap;

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

export function keyTap (key: string): KeyTap {
    return {
        type: KEY_TAP,
        payload: { key }
    };
}
