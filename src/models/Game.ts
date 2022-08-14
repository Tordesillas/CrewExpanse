import {DifficultyLevel} from '../utils';

export default class Game {
    difficultyLevel: DifficultyLevel;
    missionCount: number;

    constructor(difficultyLevel: DifficultyLevel) {
        this.difficultyLevel = difficultyLevel;
        this.missionCount = 0;
    }
}
