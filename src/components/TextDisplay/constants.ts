export const thaiScript: string = 'ส.วัส.ดี';

export const engScript: string = 'sa-wàt-dii';

interface PressedKey {
    keyValue: string
    displayValue: string
};

export const keyList: Record<string, PressedKey> = {
    1: { displayValue: 'ๅ', keyValue: '1' },
    2: { displayValue: 'ฃ', keyValue: '2' },
    3: { displayValue: '-', keyValue: '3' },
    4: { displayValue: 'ภ', keyValue: '4' },
    5: { displayValue: 'ถ', keyValue: '5' },
    6: { displayValue: 'ุ', keyValue: '6' },
    7: { displayValue: 'ึ', keyValue: '7' },
    8: { displayValue: 'ค', keyValue: '8' },
    9: { displayValue: 'ต', keyValue: '9' },
    0: { displayValue: 'จ', keyValue: '0' },
    q: { displayValue: 'ๆ', keyValue: 'q' },
    w: { displayValue: 'ไ', keyValue: 'w' },
    e: { displayValue: 'ำ', keyValue: 'e' },
    r: { displayValue: 'พ', keyValue: 'r' },
    t: { displayValue: 'ะ', keyValue: 't' },
    y: { displayValue: 'ั', keyValue: 'y' },
    u: { displayValue: 'ี', keyValue: 'u' },
    i: { displayValue: 'ร', keyValue: 'i' },
    o: { displayValue: 'น', keyValue: 'o' },
    p: { displayValue: 'ย', keyValue: 'p' },
    a: { displayValue: 'ฟ', keyValue: 'a' },
    s: { displayValue: 'ห', keyValue: 's' },
    d: { displayValue: 'ก', keyValue: 'd' },
    f: { displayValue: 'ด', keyValue: 'f' },
    g: { displayValue: 'เ', keyValue: 'g' },
    h: { displayValue: ' ้', keyValue: 'h' },
    j: { displayValue: ' ่', keyValue: 'j' },
    k: { displayValue: 'า', keyValue: 'k' },
    l: { displayValue: 'ส', keyValue: 'l' },
    z: { displayValue: 'ผ', keyValue: 'z' },
    x: { displayValue: 'ป', keyValue: 'x' },
    c: { displayValue: 'แ', keyValue: 'c' },
    v: { displayValue: 'อ', keyValue: 'v' },
    b: { displayValue: 'ิ', keyValue: 'b' },
    n: { displayValue: 'ื', keyValue: 'n' },
    m: { displayValue: 'ท', keyValue: 'm' },
    '`': { displayValue: '_', keyValue: '`' },
    ',': { displayValue: 'ม', keyValue: ',' },
    '.': { displayValue: 'ใ', keyValue: '.' },
    '/': { displayValue: 'ฝ', keyValue: '/' },
    '-': { displayValue: 'ข', keyValue: '-' },
    '=': { displayValue: 'ช', keyValue: '=' },
    '[': { displayValue: 'บ', keyValue: '[' },
    ']': { displayValue: 'ล', keyValue: ']' },
    '\\': { displayValue: 'ฃ', keyValue: '\\' },
    ';': { displayValue: 'ว', keyValue: ';' },
    '\'': { displayValue: 'ง', keyValue: '\'' },
};

export const compoundLetters: string[] = [
    'ุ', 'ึ', 'ำ', 'ั', 'ี', '้', '่', 'ิ', 'ื',
];
