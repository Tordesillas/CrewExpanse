import {DifficultyLevel} from '../utils';

export default class Mission {
    text: string;
    difficultyLevel: DifficultyLevel;
    id: number;
    primaryIcons: Array<string>;
    secondaryIcons: Array<string>;

    constructor(text: string, level: number, id: number, primaryIcons: Array<string>, secondaryIcons: Array<string>) {
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
        this.primaryIcons = primaryIcons;
        this.secondaryIcons = secondaryIcons;
    }
}
