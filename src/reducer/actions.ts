export const TEST_ACTION = 'TEST_ACTION';

interface TestData {
    type: typeof TEST_ACTION
    payload: { testText: string }
}

export type ActionTypes = TestData;

export function testAction (testText: string): TestData {
    return {
        type: TEST_ACTION,
        payload: { testText }
    };
}
