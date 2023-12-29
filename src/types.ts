export interface PhonemeStartEnd {
    start: number
    end: number
}

export interface SuggestedKey {
    key: string | undefined
    isCaps: boolean
}

export interface Lesson {
    title: string
    engScripts: string[]
    thaiPhonemeScripts: string[]
    engPhonemeScripts: string[]
}

export type ReplayLessonState =
    'none' |
    'awaiting' |
    'confirmed';
