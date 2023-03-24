import type {
    PhonemeStartEnd
} from '../types';

import {
    engScripts,
    engPhonemeScripts,
    thaiPhonemeScripts,
} from './constants';
import { splitPhonemeScript } from './utils';

export interface State {
    testText: string
    pressedKeys: string[]
    tappedKeys: string[]
    capsLockOn: boolean
    shiftKeyDown: boolean
    enteredText: string
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
};

export const initialState: State = {
    testText: '',
    pressedKeys: [],
    tappedKeys: [],
    capsLockOn: false,
    shiftKeyDown: false,
    enteredText: '',
    backspacesRequired: 0,
    currThaiLetterIndex: 0,
    currPhonemeIndex: 0,
    currThaiScript: thaiPhonemeScripts[0].replaceAll('.', ''),
    currScriptIndex: 0,
    engScripts,
    engPhonemeScripts,
    thaiPhonemeScripts,
    engPhonemeStartEndList: splitPhonemeScript(engPhonemeScripts[0]),
    thaiPhonemeStartEndList: splitPhonemeScript(thaiPhonemeScripts[0], true),
};
