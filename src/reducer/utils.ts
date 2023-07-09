import type { PhonemeStartEnd } from '../types';

export const splitPhonemeScript = (
    phonemeScript: string,
    isThaiScript?: boolean
): PhonemeStartEnd[] => {
    const phonemeStartEndList: PhonemeStartEnd[] = [];

    let phonemeStartIndex = 0;
    let phonemeEndIndex = 0;
    let count = 0;
    phonemeScript.split('').forEach((char, idx) => {
        if (char === '.' || char === '-' || char === ' ') {
            phonemeEndIndex = count;
            phonemeStartEndList.push({
                start: phonemeStartIndex,
                end: phonemeEndIndex,
            });

            if (isThaiScript) {
                count--;
            }

            phonemeStartIndex = count + 1;
        }

        if (idx === phonemeScript.length - 1) {
            phonemeStartEndList.push({
                start: phonemeStartIndex,
                end: count + 1,
            });
        }

        count++;
    });

    return phonemeStartEndList;
};
