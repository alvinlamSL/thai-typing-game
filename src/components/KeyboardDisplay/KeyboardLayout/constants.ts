import type { KeyboardRowProps } from './KeyboardLayout';

const keyboardRow1: KeyboardRowProps = {
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
        { keyProps: { mainText: 'back' }, size: 1.6 },
    ]
};

const keyboardRow2: KeyboardRowProps = {
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

const keyboardRow3: KeyboardRowProps = {
    keyboardKeys: [
        { keyProps: { mainText: 'caps lock' }, size: 1.6 },
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
        { keyProps: { mainText: 'enter', subText: '' }, size: 1.6 },
    ]
};

const keyboardRow4: KeyboardRowProps = {
    keyboardKeys: [
        { keyProps: { mainText: 'shift' }, size: 2 },
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
        { keyProps: { mainText: 'shift' }, size: 2 },
    ]
};

const keyboardRow5: KeyboardRowProps = {
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

export const keyboardRows: KeyboardRowProps[] = [
    keyboardRow1,
    keyboardRow2,
    keyboardRow3,
    keyboardRow4,
    keyboardRow5,
];
