import { extraLongFactorials } from "./extra-long-factorial";

describe('test function', () => {
    it('function takes 0', () => {
        expect(extraLongFactorials(0)).toEqual(1n);
    });

    it('function takes 25', () => {
        expect(extraLongFactorials(25)).toEqual(15511210043330985984000000n);
    });
});