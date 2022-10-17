import { double } from './tools';

describe('first', () => {
    test('should first', () => {
        const x = 2;
        const expectedR = 4;
        const r = double(x);
        expect(r).toBe(expectedR);
    });
});
