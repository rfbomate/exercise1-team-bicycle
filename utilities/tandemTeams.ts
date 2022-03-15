
import { sortNumericArrays } from '../utilities/sortUtilities';

class TandemTeams {
    _redShirtSpeeds: number[]
    _blueShirtSpeeds: number[]
    _fastest: boolean

    constructor(pRedShirtSpeeds: number[], pBlueShirtSpeeds: number[], pFastest: boolean) {
        this._redShirtSpeeds = pRedShirtSpeeds;
        this._blueShirtSpeeds = pBlueShirtSpeeds;
        this._fastest = pFastest
    }


    private tandemSpeed = (speedA: number, speedB: number): number => (speedA > speedB) ? speedA : speedB;

    calculateExtremeValues(): number {
        let tempRedShirt: number[] = [];
        let tempBlueShirt: number[] = [];

        let finalValue = 0;
        if (this._fastest) {
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