import { TandemTeams } from './utilities/tandemTeams';

describe("Tandem tests", () => {
    let redShirtTeam: number[] = [5, 5, 3, 9, 2];
    let blueShirtTeam: number[] = [3, 6, 7, 2, 1];

    it('Creating an instance of TandemTeams class', () => {

        const tandemTeamsObject = new TandemTeams(redShirtTeam, blueShirtTeam);
        expect(tandemTeamsObject).toBeInstanceOf(TandemTeams);
    });

    it('Arrays with differents lengths', () => {
        redShirtTeam = [5, 5, 3, 9, 2, 5];
        blueShirtTeam = [3, 6, 7, 2, 1];
        try {
            const instance = new TandemTeams(redShirtTeam, blueShirtTeam);
        } catch (e) {
            expect(e).toBe('The arrays must have the same length')
        }
    });

    it('All values in red shirt team is not integer', () => {
        redShirtTeam = [5, 5, 3, 9.4, 2];
        blueShirtTeam = [3, 6, 7, 2, 1];
        try {
            const instance = new TandemTeams(redShirtTeam, blueShirtTeam);
        } catch (e) {
            expect(e).toBe('All values of the red shirt teams must be integer and positives')
        }
    });

    it('All values in blue shirt team is not integer', () => {
        redShirtTeam = [5, 5, 3, 9, 2];
        blueShirtTeam = [3, 6, 7, 2.2, 1];
        try {
            const instance = new TandemTeams(redShirtTeam, blueShirtTeam);
        } catch (e) {
            expect(e).toBe('All values of the blue shirt teams must be integer and positives')
        }
    });

    it('Calculate the maximum possible total speed', () => {
        redShirtTeam = [5, 5, 3, 9, 2];
        blueShirtTeam = [3, 6, 7, 2, 1];
        const fastest = true;

        const tandemTeamsObject: TandemTeams = new TandemTeams(redShirtTeam, blueShirtTeam);
        const result: number = tandemTeamsObject.calculateExtremeValues(fastest);

        expect(result).toBe(32);

    });

    it('Calculate the minimum possible total speed', () => {
        redShirtTeam = [5, 5, 3, 9, 2];
        blueShirtTeam = [3, 6, 7, 2, 1];
        const fastest = false;

        const tandemTeamsObject: TandemTeams = new TandemTeams(redShirtTeam, blueShirtTeam);
        const result: number = tandemTeamsObject.calculateExtremeValues(fastest);

        expect(result).toBe(25);

    });


});