import Mission from './Mission';
import MissionsFactory from './MissionsFactory';
import {DifficultyLevel} from '../utils';

export default class Game {
    difficultyLevel: DifficultyLevel;
    missionsPlayed: Array<number>;
    score: number | null;
    failures: number;

    constructor(difficultyLevel: DifficultyLevel, isScoreComputed: boolean) {
        this.difficultyLevel = difficultyLevel;
        this.missionsPlayed = [];
        this.score = isScoreComputed ? 0 : null;
        this.failures = 0;
    }

    getMissionsCount(): number {
        return this.missionsPlayed.length;
    }

    pickNewMission(): Mission | null {
        this.failures = 0;
        const newMission = MissionsFactory.generateMission(this.missionsPlayed, this.difficultyLevel);
        if (newMission) {
            this.missionsPlayed.push(newMission.id);
        }
        return newMission;
    }

    canFail(): boolean {
        if (this.failures < 5) {
            this.failures++;
            return true;
        }
        return false;
    }
}
