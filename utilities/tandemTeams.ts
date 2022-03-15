import { tandemSpeed } from '../utilities/tandemSpeed';

class TandemTeams {
    redShirtSpeeds: number[]
    blueShirtSpeeds: number[]
    fastest: boolean

    constructor(pRedShirtSpeeds: number[], pBlueShirtSpeeds: number[], pFastest: boolean) {
        this.redShirtSpeeds = pRedShirtSpeeds;
        this.blueShirtSpeeds = pBlueShirtSpeeds;
        this.fastest = pFastest
    }

    calculateExtremeValues(): number {
        return 0;
    }


}

export { TandemTeams }