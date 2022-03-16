// I import my implementation for sort array 
import { sortNumericArrays } from './sortUtilities';

// I define the class for implement the business logic
class TandemTeams {

    //I define the privates attributes
    _redShirtSpeeds: number[]
    _blueShirtSpeeds: number[]

    // I create the constructor to initialize the attributes
    constructor(pRedShirtSpeeds: number[], pBlueShirtSpeeds: number[]) {

        // I verify if both teams has the same lenght
        if (pRedShirtSpeeds.length != pBlueShirtSpeeds.length) {
            throw "The arrays must have the same length"
        }

        // I verify if both arrays has only integer items
        const isAllIntegerRedShirt = pRedShirtSpeeds.every((item) => Number.isInteger(item) && item >= 0);
        const isAllIntegerBlueShirt = pBlueShirtSpeeds.every((item) => Number.isInteger(item) && item >= 0);


        // if I find an error, throw an exception
        if (!isAllIntegerRedShirt) {
            throw "All values of the red shirt teams must be integer and positives";
        }

        if (!isAllIntegerBlueShirt) {
            throw "All values of the blue shirt teams must be integer and positives";
        }

        // if input data has correct format, I can initialize the attributes
        this._redShirtSpeeds = pRedShirtSpeeds;
        this._blueShirtSpeeds = pBlueShirtSpeeds;
    }

    // private method that calculate the tandem speed
    private tandemSpeed = (speedA: number, speedB: number): number => (speedA > speedB) ? speedA : speedB;

    //main method that answer the question of the exercise
    calculateExtremeValues(fastest: boolean): number {

        let tempRedShirt: number[] = [];
        let tempBlueShirt: number[] = [];

        let finalValue = 0;

        if (fastest) { // if I go to get the faster velocity 
            tempRedShirt = sortNumericArrays(this._redShirtSpeeds, 'desc');
            tempBlueShirt = sortNumericArrays(this._blueShirtSpeeds, 'asc');
            for (let i = 0; i < tempBlueShirt.length; i++) {
                finalValue += this.tandemSpeed(tempRedShirt[i], tempBlueShirt[i]);
            }
        } else { //if I go to get the slowest velocity
            tempRedShirt = sortNumericArrays(this._redShirtSpeeds, 'asc');
            tempBlueShirt = sortNumericArrays(this._blueShirtSpeeds, 'asc');
            for (let i = 0; i < tempBlueShirt.length; i++) {
                finalValue += this.tandemSpeed(tempRedShirt[i], tempBlueShirt[i]);
            }
        }
        return finalValue;
    }




}

//export TandemTeams class
export { TandemTeams }