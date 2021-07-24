import { climbingLeaderboard } from "./leaderboard";

describe('test function', () => {
    it('function takes empty arrays', () => {
        expect(climbingLeaderboard([], [])).toEqual([]);
    });

    it('function takes empty ranked array', () => {
        expect(climbingLeaderboard([], [100, 80, 27, 75])).toEqual([1, 1, 1, 1]);
    });

    it('function takes empty player array', () => {
        expect(climbingLeaderboard([100, 90, 80, 80, 50], [])).toEqual([]);
    });

    it('function takes arrays', () => {
        expect(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])).toEqual([6, 5, 4, 2, 1]);
    });
});