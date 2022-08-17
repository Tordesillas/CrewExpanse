import {DifficultyLevel} from '../utils';

export default class Mission {
    text: string;
    difficultyLevel: DifficultyLevel;
    id: number;

    constructor(text: string, level: number, id: number) {
        this.text = text;
        switch (level) {
            case 1:
                this.difficultyLevel = 'BEGINNER';
                break;
            case 2:
                this.difficultyLevel = 'CONFIRMED';
                break;
            default:
                this.difficultyLevel = 'EXPERT';
        }
        this.id = id;
    }
}
