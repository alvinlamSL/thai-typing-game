export interface PhonemeStartEnd {
    start: number
    end: number
}

export const splitEngPhonemeScript = (engPhonemeScript: string): PhonemeStartEnd[] => {
    const phonemeStartEndList: PhonemeStartEnd[] = [];

    let phonemeStartIndex = 0;
    let phonemeEndIndex = 0;
    engPhonemeScript.split('').forEach((char, idx) => {
        if (char === '-') {
            phonemeEndIndex = idx;
            phonemeStartEndList.push({
                start: phonemeStartIndex,
                end: phonemeEndIndex,
            });

            phonemeStartIndex = phonemeEndIndex + 1;
        }

        if (idx === engPhonemeScript.length - 1) {
            phonemeStartEndList.push({
                start: phonemeStartIndex,
                end: idx + 1,
            });
        }
    });

    return phonemeStartEndList;
};
