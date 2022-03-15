
import { sortNumericArrays } from '../utilities/sortUtilities';

class TandemTeams {
    _redShirtSpeeds: number[]
    _blueShirtSpeeds: number[]

    constructor(pRedShirtSpeeds: number[], pBlueShirtSpeeds: number[]) {
        this._redShirtSpeeds = pRedShirtSpeeds;
        this._blueShirtSpeeds = pBlueShirtSpeeds;
    }


    private tandemSpeed = (speedA: number, speedB: number): number => (speedA > speedB) ? speedA : speedB;

    calculateExtremeValues(fastest: boolean): number {
        let tempRedShirt: number[] = [];
        let tempBlueShirt: number[] = [];

        let finalValue = 0;
        if (fastest) {
            tempRedShirt = sortNumericArrays(this._redShirtSpeeds, 'desc');
            tempBlueShirt = sortNumericArrays(this._blueShirtSpeeds, 'asc');
            for (let i = 0; i < tempBlueShirt.length; i++) {
                finalValue += this.tandemSpeed(tempRedShirt[i], tempBlueShirt[i]);
            }
        } else {
            tempRedShirt = sortNumericArrays(this._redShirtSpeeds, 'asc');
            tempBlueShirt = sortNumericArrays(this._blueShirtSpeeds, 'asc');
            for (let i = 0; i < tempBlueShirt.length; i++) {
                finalValue += this.tandemSpeed(tempRedShirt[i], tempBlueShirt[i]);
            }
        }
        return finalValue;
    }




}

export { TandemTeams }