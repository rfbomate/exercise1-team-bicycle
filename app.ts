import { TandemTeams } from './utilities/tandemTeams';
console.clear();
//we create the input values
const redShirtTeam: number[] = [5, 5, 3, 9, 2];
const blueShirtTeam: number[] = [3, 6, 7, 2, 1];
const moreFastest = false;

//we create an instance of the class
const tandemTeamsObject: TandemTeams = new TandemTeams(redShirtTeam, blueShirtTeam, moreFastest);

//we call tyo the methods that have the result
const result: number = tandemTeamsObject.calculateExtremeValues();

//print the result
console.log(result);




