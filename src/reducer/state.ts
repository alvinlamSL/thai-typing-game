import type {
    PhonemeStartEnd,
    ReplayLessonState,
    SuggestedKey
} from '../types';

import { splitPhonemeScript } from './utils';

export interface State {
    testText: string
    lessonTitles: string[]
    lessonTitle: string
    lessonIndex: number
    pressedKeys: string[]
    tappedKeys: string[]
    capsLockOn: boolean
    shiftKeyDown: boolean
    enteredText: string
    suggestedKey: SuggestedKey
    backspacesRequired: number
    currThaiLetterIndex: number
    currPhonemeIndex: number
    currThaiScript: string
    currScriptIndex: number
    engScripts: string[]
    engPhonemeScripts: string[]
    thaiPhonemeScripts: string[]
    engPhonemeStartEndList: PhonemeStartEnd[]
    thaiPhonemeStartEndList: PhonemeStartEnd[]
    replayLessonState: ReplayLessonState
};

export const initialState: State = {
    testText: '',
    lessonTitles: [],
    lessonTitle: 'No Lesson',
    lessonIndex: -1,
    pressedKeys: [],
    tappedKeys: [],
    capsLockOn: false,
    shiftKeyDown: false,
    enteredText: '',
    suggestedKey: { key: 'ส', isCaps: false },
    backspacesRequired: 0,
    currThaiLetterIndex: 0,
    currPhonemeIndex: 0,
    currThaiScript: 'สวัสดีค่ะ',
    currScriptIndex: 0,
    engScripts: ['hello (female speaker)'],
    engPhonemeScripts: ['sa-wàt-dii khâ'],
    thaiPhonemeScripts: ['ส.วัส.ดี.ค่ะ'],
    engPhonemeStartEndList: splitPhonemeScript('sa-wàt-dii khâ'),
    thaiPhonemeStartEndList: splitPhonemeScript('ส.วัส.ดี.ค่ะ', true),
    replayLessonState: 'none',
};
