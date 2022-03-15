import { TandemTeams } from './utilities/tandemTeams';
console.clear();
//we create the input values
const redShirtTeam: number[] = [5, 5, 3, 9, 2, 8];
const blueShirtTeam: number[] = [3, 6, 7, 2, 1];
const fastest = true;
try {
    //we create an instance of the class
    const tandemTeamsObject: TandemTeams = new TandemTeams(redShirtTeam, blueShirtTeam);

    //we call tyo the methods that have the result
    const result: number = tandemTeamsObject.calculateExtremeValues(fastest);
    //print the result
    console.log(result);
} catch (e) {
    console.error('\x1b[31m', e);
}





