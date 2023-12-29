import type { ReplayLessonState, Lesson } from '../types';

export const TEST_ACTION = 'TEST_ACTION';
export const KEY_DOWN = 'KEY_DOWN';
export const KEY_UP = 'KEY_UP';
export const KEY_TAP = 'KEY_TAP';
export const SET_LESSON = 'SET_LESSON';
export const REPLAY_LESSON = 'REPLAY_LESSON';

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

interface SetLesson {
    type: typeof SET_LESSON
    payload: { lesson: Lesson }
}

interface ReplayLesson {
    type: typeof REPLAY_LESSON
    payload: { state: ReplayLessonState }
}

export type ActionTypes =
    | TestData
    | KeyDown
    | KeyUp
    | KeyTap
    | SetLesson
    | ReplayLesson;

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

export function setLesson (lesson: Lesson): SetLesson {
    return {
        type: SET_LESSON,
        payload: { lesson }
    };
}

export function replayLesson (state: ReplayLessonState): ReplayLesson {
    return {
        type: REPLAY_LESSON,
        payload: { state }
    };
}
