import AsyncStorage from '@react-native-async-storage/async-storage';
import {DifficultyLevel} from '../utils';

const DIFFICULTY_LEVEL = 'DIFFICULTY_LEVEL';
const IS_SAME_LEVEL = 'IS_SAME_LEVEL';
const IS_SCORE_COMPUTED = 'IS_SCORE_COMPUTED';

export default class StorageService {
    static setDifficultyLevel(level: DifficultyLevel) {
        AsyncStorage.setItem(DIFFICULTY_LEVEL, level).then();
    }

    static getDifficultyLevel(): Promise<DifficultyLevel> {
        return AsyncStorage.getItem(DIFFICULTY_LEVEL) as Promise<DifficultyLevel>;
    }

    static setIsSameDifficultyLevel(isSame: boolean) {
        AsyncStorage.setItem(IS_SAME_LEVEL, isSame.toString()).then();
    }

    static isSameDifficultyLevel(): Promise<boolean> {
        return AsyncStorage.getItem(IS_SAME_LEVEL).then((strBoolean) => strBoolean === 'true');
    }

    static setIsScoreComputed(isSame: boolean) {
        AsyncStorage.setItem(IS_SCORE_COMPUTED, isSame.toString()).then();
    }

    static isScoreComputed(): Promise<boolean> {
        return AsyncStorage.getItem(IS_SCORE_COMPUTED).then((strBoolean) => strBoolean === 'true');
    }
}
