export interface KeyboardKey {
    mainText: string
    subText?: string
    iconName?: string
    value?: string
}

export interface KeyboardRowKey {
    keyProps: KeyboardKey
    size?: number
}

export interface KeyboardRow {
    keyboardKeys: KeyboardRowKey[]
}

const keyboardRow1: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: '_', subText: '`' }, size: 0.8 },
        { keyProps: { mainText: 'ๅ', subText: '1' }, size: 0.8 },
        { keyProps: { mainText: 'ฃ', subText: '2' }, size: 0.8 },
        { keyProps: { mainText: '-', subText: '3' }, size: 0.8 },
        { keyProps: { mainText: 'ภ', subText: '4' }, size: 0.8 },
        { keyProps: { mainText: 'ถ', subText: '5' }, size: 0.8 },
        { keyProps: { mainText: ' ุ', subText: '6' }, size: 0.8 },
        { keyProps: { mainText: ' ึ', subText: '7' }, size: 0.8 },
        { keyProps: { mainText: 'ค', subText: '8' }, size: 0.8 },
        { keyProps: { mainText: 'ต', subText: '9' }, size: 0.8 },
        { keyProps: { mainText: 'จ', subText: '0' }, size: 0.8 },
        { keyProps: { mainText: 'ข', subText: '-' }, size: 0.8 },
        { keyProps: { mainText: 'ช', subText: '=' }, size: 0.8 },
        { keyProps: { mainText: 'backspace', value: 'backspace' }, size: 1.6 },
    ]
};

const keyboardRow2: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'tab' }, size: 1.2 },
        { keyProps: { mainText: 'ๆ', subText: 'q' }, size: 0.8 },
        { keyProps: { mainText: 'ไ', subText: 'w' }, size: 0.8 },
        { keyProps: { mainText: ' ำ', subText: 'e' }, size: 0.8 },
        { keyProps: { mainText: 'พ', subText: 'r' }, size: 0.8 },
        { keyProps: { mainText: 'ะ', subText: 't' }, size: 0.8 },
        { keyProps: { mainText: ' ั', subText: 'y' }, size: 0.8 },
        { keyProps: { mainText: ' ี', subText: 'u' }, size: 0.8 },
        { keyProps: { mainText: 'ร', subText: 'i' }, size: 0.8 },
        { keyProps: { mainText: 'น', subText: 'o' }, size: 0.8 },
        { keyProps: { mainText: 'ย', subText: 'p' }, size: 0.8 },
        { keyProps: { mainText: 'บ', subText: '[' }, size: 0.8 },
        { keyProps: { mainText: 'ล', subText: ']' }, size: 0.8 },
        { keyProps: { mainText: 'ฃ', subText: '\\' }, size: 0.8 },
    ]
};

const keyboardRow3: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'capslock' }, size: 1.6 },
        { keyProps: { mainText: 'ฟ', subText: 'a' }, size: 0.8 },
        { keyProps: { mainText: 'ห', subText: 's' }, size: 0.8 },
        { keyProps: { mainText: 'ก', subText: 'd' }, size: 0.8 },
        { keyProps: { mainText: 'ด', subText: 'f' }, size: 0.8 },
        { keyProps: { mainText: 'เ', subText: 'g' }, size: 0.8 },
        { keyProps: { mainText: ' ้', subText: 'h' }, size: 0.8 },
        { keyProps: { mainText: ' ่', subText: 'j' }, size: 0.8 },
        { keyProps: { mainText: 'า', subText: 'k' }, size: 0.8 },
        { keyProps: { mainText: 'ส', subText: 'l' }, size: 0.8 },
        { keyProps: { mainText: 'ว', subText: ';' }, size: 0.8 },
        { keyProps: { mainText: 'ง', subText: '\'' }, size: 0.8 },
        { keyProps: { mainText: 'enter', subText: '', value: 'enter' }, size: 1.6 },
    ]
};

const keyboardRow4: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'shift', value: 'shift' }, size: 2 },
        { keyProps: { mainText: 'ผ', subText: 'z' }, size: 0.8 },
        { keyProps: { mainText: 'ป', subText: 'x' }, size: 0.8 },
        { keyProps: { mainText: 'แ', subText: 'c' }, size: 0.8 },
        { keyProps: { mainText: 'อ', subText: 'v' }, size: 0.8 },
        { keyProps: { mainText: ' ิ', subText: 'b' }, size: 0.8 },
        { keyProps: { mainText: ' ื', subText: 'n' }, size: 0.8 },
        { keyProps: { mainText: 'ท', subText: 'm' }, size: 0.8 },
        { keyProps: { mainText: 'ม', subText: ',' }, size: 0.8 },
        { keyProps: { mainText: 'ใ', subText: '.' }, size: 0.8 },
        { keyProps: { mainText: 'ฝ', subText: '/' }, size: 0.8 },
        { keyProps: { mainText: 'shift', value: 'shift' }, size: 2 },
    ]
};

const keyboardRow5: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'ctrl' }, size: 1 },
        { keyProps: { mainText: 'cmd' }, size: 1 },
        { keyProps: { mainText: 'alt' }, size: 1 },
        { keyProps: { mainText: 'space' }, size: 6 },
        { keyProps: { mainText: 'alt' }, size: 1 },
        { keyProps: { mainText: 'cmd' }, size: 1 },
        { keyProps: { mainText: 'ctrl' }, size: 1 },
    ]
};

const keyboardRow6: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: '%', subText: '`' }, size: 0.8 },
        { keyProps: { mainText: '+', subText: '1' }, size: 0.8 },
        { keyProps: { mainText: '๑', subText: '2' }, size: 0.8 },
        { keyProps: { mainText: '๒', subText: '3' }, size: 0.8 },
        { keyProps: { mainText: '๓', subText: '4' }, size: 0.8 },
        { keyProps: { mainText: '๔', subText: '5' }, size: 0.8 },
        { keyProps: { mainText: 'ู', subText: '6' }, size: 0.8 },
        { keyProps: { mainText: '฿', subText: '7' }, size: 0.8 },
        { keyProps: { mainText: '๕', subText: '8' }, size: 0.8 },
        { keyProps: { mainText: '๖', subText: '9' }, size: 0.8 },
        { keyProps: { mainText: '๗', subText: '0' }, size: 0.8 },
        { keyProps: { mainText: '๘', subText: '-' }, size: 0.8 },
        { keyProps: { mainText: '๙', subText: '=' }, size: 0.8 },
        { keyProps: { mainText: 'backspace', value: 'backspace' }, size: 1.6 },
    ]
};

const keyboardRow7: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'tab' }, size: 1.2 },
        { keyProps: { mainText: '๐', subText: 'q' }, size: 0.8 },
        { keyProps: { mainText: '"', subText: 'w' }, size: 0.8 },
        { keyProps: { mainText: 'ฎ', subText: 'e' }, size: 0.8 },
        { keyProps: { mainText: 'ฑ', subText: 'r' }, size: 0.8 },
        { keyProps: { mainText: 'ธ', subText: 't' }, size: 0.8 },
        { keyProps: { mainText: 'ํ', subText: 'y' }, size: 0.8 },
        { keyProps: { mainText: '๊', subText: 'u' }, size: 0.8 },
        { keyProps: { mainText: 'ณ', subText: 'i' }, size: 0.8 },
        { keyProps: { mainText: 'ฯ', subText: 'o' }, size: 0.8 },
        { keyProps: { mainText: 'ญ', subText: 'p' }, size: 0.8 },
        { keyProps: { mainText: 'ฐ', subText: '[' }, size: 0.8 },
        { keyProps: { mainText: ',', subText: ']' }, size: 0.8 },
        { keyProps: { mainText: 'ฅ', subText: '\\' }, size: 0.8 },
    ]
};

const keyboardRow8: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'capslock' }, size: 1.6 },
        { keyProps: { mainText: 'ฤ', subText: 'a' }, size: 0.8 },
        { keyProps: { mainText: 'ฆ', subText: 's' }, size: 0.8 },
        { keyProps: { mainText: 'ฏ', subText: 'd' }, size: 0.8 },
        { keyProps: { mainText: 'โ', subText: 'f' }, size: 0.8 },
        { keyProps: { mainText: 'ฌ', subText: 'g' }, size: 0.8 },
        { keyProps: { mainText: '็', subText: 'h' }, size: 0.8 },
        { keyProps: { mainText: '๋', subText: 'j' }, size: 0.8 },
        { keyProps: { mainText: 'ษ', subText: 'k' }, size: 0.8 },
        { keyProps: { mainText: 'ศ', subText: 'l' }, size: 0.8 },
        { keyProps: { mainText: 'ซ', subText: ';' }, size: 0.8 },
        { keyProps: { mainText: '.', subText: '\'' }, size: 0.8 },
        { keyProps: { mainText: 'enter', subText: '', value: 'enter' }, size: 1.6 },
    ]
};

const keyboardRow9: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'shift' }, size: 2 },
        { keyProps: { mainText: '(', subText: 'z' }, size: 0.8 },
        { keyProps: { mainText: ')', subText: 'x' }, size: 0.8 },
        { keyProps: { mainText: 'ฉ', subText: 'c' }, size: 0.8 },
        { keyProps: { mainText: 'ฮ', subText: 'v' }, size: 0.8 },
        { keyProps: { mainText: 'ฺ', subText: 'b' }, size: 0.8 },
        { keyProps: { mainText: '์', subText: 'n' }, size: 0.8 },
        { keyProps: { mainText: '?', subText: 'm' }, size: 0.8 },
        { keyProps: { mainText: 'ฒ', subText: ',' }, size: 0.8 },
        { keyProps: { mainText: 'ฬ', subText: '.' }, size: 0.8 },
        { keyProps: { mainText: 'ฦ', subText: '/' }, size: 0.8 },
        { keyProps: { mainText: 'shift' }, size: 2 },
    ]
};

// row 1 for mobile
const keyboardRow1M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'ๅ', subText: '1' }, size: 1 },
        { keyProps: { mainText: 'ฃ', subText: '2' }, size: 1 },
        { keyProps: { mainText: '-', subText: '3' }, size: 1 },
        { keyProps: { mainText: 'ภ', subText: '4' }, size: 1 },
        { keyProps: { mainText: 'ถ', subText: '5' }, size: 1 },
        { keyProps: { mainText: ' ุ', subText: '6' }, size: 1 },
        { keyProps: { mainText: ' ึ', subText: '7' }, size: 1 },
        { keyProps: { mainText: 'ค', subText: '8' }, size: 1 },
        { keyProps: { mainText: 'ต', subText: '9' }, size: 1 },
        { keyProps: { mainText: 'จ', subText: '0' }, size: 1 },
        { keyProps: { mainText: 'ข', subText: '-' }, size: 1 },
        { keyProps: { mainText: 'ช', subText: '=' }, size: 1 },
    ]
};

// row 2 for mobile
const keyboardRow2M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'ๆ', subText: 'q' }, size: 1 },
        { keyProps: { mainText: 'ไ', subText: 'w' }, size: 1 },
        { keyProps: { mainText: ' ำ', subText: 'e' }, size: 1 },
        { keyProps: { mainText: 'พ', subText: 'r' }, size: 1 },
        { keyProps: { mainText: 'ะ', subText: 't' }, size: 1 },
        { keyProps: { mainText: ' ั', subText: 'y' }, size: 1 },
        { keyProps: { mainText: ' ี', subText: 'u' }, size: 1 },
        { keyProps: { mainText: 'ร', subText: 'i' }, size: 1 },
        { keyProps: { mainText: 'น', subText: 'o' }, size: 1 },
        { keyProps: { mainText: 'ย', subText: 'p' }, size: 1 },
        { keyProps: { mainText: 'บ', subText: '[' }, size: 1 },
        { keyProps: { mainText: 'ล', subText: ']' }, size: 1 },
    ]
};

// row 3 for mobile
const keyboardRow3M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'ฟ', subText: 'a' }, size: 1 },
        { keyProps: { mainText: 'ห', subText: 's' }, size: 1 },
        { keyProps: { mainText: 'ก', subText: 'd' }, size: 1 },
        { keyProps: { mainText: 'ด', subText: 'f' }, size: 1 },
        { keyProps: { mainText: 'เ', subText: 'g' }, size: 1 },
        { keyProps: { mainText: ' ้', subText: 'h' }, size: 1 },
        { keyProps: { mainText: ' ่', subText: 'j' }, size: 1 },
        { keyProps: { mainText: 'า', subText: 'k' }, size: 1 },
        { keyProps: { mainText: 'ส', subText: 'l' }, size: 1 },
        { keyProps: { mainText: 'ว', subText: ';' }, size: 1 },
        { keyProps: { mainText: 'ง', subText: '\'' }, size: 1 },
    ]
};

// row 4 for mobile
const keyboardRow4M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'capslock', iconName: 'capslock' }, size: 1 },
        { keyProps: { mainText: 'ผ', subText: 'z' }, size: 1 },
        { keyProps: { mainText: 'ป', subText: 'x' }, size: 1 },
        { keyProps: { mainText: 'แ', subText: 'c' }, size: 1 },
        { keyProps: { mainText: 'อ', subText: 'v' }, size: 1 },
        { keyProps: { mainText: ' ิ', subText: 'b' }, size: 1 },
        { keyProps: { mainText: ' ื', subText: 'n' }, size: 1 },
        { keyProps: { mainText: 'ท', subText: 'm' }, size: 1 },
        { keyProps: { mainText: 'ม', subText: ',' }, size: 1 },
        { keyProps: { mainText: 'ใ', subText: '.' }, size: 1 },
        { keyProps: { mainText: 'ฝ', subText: '/' }, size: 1 },
        { keyProps: { mainText: 'backspace', iconName: 'backspace' }, size: 1 },
    ]
};

// row 5 for mobile
const keyboardRow5M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: ',' }, size: 1 },
        { keyProps: { mainText: 'space' }, size: 6 },
        { keyProps: { mainText: '.' }, size: 1 },
        { keyProps: { mainText: 'enter', subText: '', iconName: 'enter', value: 'enter' }, size: 1.6 },
    ]
};

// row 6 for mobile
const keyboardRow6M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: '+', subText: '1' }, size: 1 },
        { keyProps: { mainText: '๑', subText: '2' }, size: 1 },
        { keyProps: { mainText: '๒', subText: '3' }, size: 1 },
        { keyProps: { mainText: '๓', subText: '4' }, size: 1 },
        { keyProps: { mainText: '๔', subText: '5' }, size: 1 },
        { keyProps: { mainText: 'ู', subText: '6' }, size: 1 },
        { keyProps: { mainText: '฿', subText: '7' }, size: 1 },
        { keyProps: { mainText: '๕', subText: '8' }, size: 1 },
        { keyProps: { mainText: '๖', subText: '9' }, size: 1 },
        { keyProps: { mainText: '๗', subText: '0' }, size: 1 },
        { keyProps: { mainText: '๘', subText: '-' }, size: 1 },
        { keyProps: { mainText: '๙', subText: '=' }, size: 1 },
    ]
};

// row 7 for mobile
const keyboardRow7M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: '๐', subText: 'q' }, size: 1 },
        { keyProps: { mainText: '"', subText: 'w' }, size: 1 },
        { keyProps: { mainText: 'ฎ', subText: 'e' }, size: 1 },
        { keyProps: { mainText: 'ฑ', subText: 'r' }, size: 1 },
        { keyProps: { mainText: 'ธ', subText: 't' }, size: 1 },
        { keyProps: { mainText: 'ํ', subText: 'y' }, size: 1 },
        { keyProps: { mainText: '๊', subText: 'u' }, size: 1 },
        { keyProps: { mainText: 'ณ', subText: 'i' }, size: 1 },
        { keyProps: { mainText: 'ฯ', subText: 'o' }, size: 1 },
        { keyProps: { mainText: 'ญ', subText: 'p' }, size: 1 },
        { keyProps: { mainText: 'ฐ', subText: '[' }, size: 1 },
        { keyProps: { mainText: ',', subText: ']' }, size: 1 },
    ]
};

// row 8 for mobile
const keyboardRow8M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'ฤ', subText: 'a' }, size: 1 },
        { keyProps: { mainText: 'ฆ', subText: 's' }, size: 1 },
        { keyProps: { mainText: 'ฏ', subText: 'd' }, size: 1 },
        { keyProps: { mainText: 'โ', subText: 'f' }, size: 1 },
        { keyProps: { mainText: 'ฌ', subText: 'g' }, size: 1 },
        { keyProps: { mainText: '็', subText: 'h' }, size: 1 },
        { keyProps: { mainText: '๋', subText: 'j' }, size: 1 },
        { keyProps: { mainText: 'ษ', subText: 'k' }, size: 1 },
        { keyProps: { mainText: 'ศ', subText: 'l' }, size: 1 },
        { keyProps: { mainText: 'ซ', subText: ';' }, size: 1 },
        { keyProps: { mainText: '.', subText: '\'' }, size: 1 },
    ]
};

// row 9 for mobile
const keyboardRow9M: KeyboardRow = {
    keyboardKeys: [
        { keyProps: { mainText: 'capslock', iconName: 'capslock' }, size: 1 },
        { keyProps: { mainText: '(', subText: 'z' }, size: 1 },
        { keyProps: { mainText: ')', subText: 'x' }, size: 1 },
        { keyProps: { mainText: 'ฉ', subText: 'c' }, size: 1 },
        { keyProps: { mainText: 'ฮ', subText: 'v' }, size: 1 },
        { keyProps: { mainText: 'ฺ', subText: 'b' }, size: 1 },
        { keyProps: { mainText: '์', subText: 'n' }, size: 1 },
        { keyProps: { mainText: '?', subText: 'm' }, size: 1 },
        { keyProps: { mainText: 'ฒ', subText: ',' }, size: 1 },
        { keyProps: { mainText: 'ฬ', subText: '.' }, size: 1 },
        { keyProps: { mainText: 'ฦ', subText: '/' }, size: 1 },
        { keyProps: { mainText: 'backspace', iconName: 'backspace' }, size: 1 },
    ]
};

export const keyboardRows: KeyboardRow[] = [
    keyboardRow1,
    keyboardRow2,
    keyboardRow3,
    keyboardRow4,
    keyboardRow5,
];

export const keyboardRowsShift: KeyboardRow[] = [
    keyboardRow6,
    keyboardRow7,
    keyboardRow8,
    keyboardRow9,
    keyboardRow5,
];

export const keyboardRowsM: KeyboardRow[] = [
    keyboardRow1M,
    keyboardRow2M,
    keyboardRow3M,
    keyboardRow4M,
    keyboardRow5M,
];

export const keyboardRowsShiftM: KeyboardRow[] = [
    keyboardRow6M,
    keyboardRow7M,
    keyboardRow8M,
    keyboardRow9M,
    keyboardRow5M,
];
