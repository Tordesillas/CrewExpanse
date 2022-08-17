import AsyncStorage from '@react-native-async-storage/async-storage';

const IS_SAME_LEVEL = 'IS_SAME_LEVEL';
const IS_SCORE_COMPUTED = 'IS_SCORE_COMPUTED';

export default class StorageService {
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
