import Mission from './Mission';
import {DifficultyLevel} from '../utils';
import missions from '../utils/missions.json';

export default class MissionsFactory {
    static generateMission(missionsAlreadyPlayed: Array<number>, difficultyLevel: DifficultyLevel): Mission | null {
        let availableMissions = missions;
        if (difficultyLevel !== 'RANDOM') {
            const difficultyChosen = ['BEGINNER', 'CONFIRMED', 'EXPERT'].indexOf(difficultyLevel) + 1;
            availableMissions = availableMissions.filter(({level}) => level === difficultyChosen);
        }
        if (missionsAlreadyPlayed.length) {
            availableMissions = availableMissions.filter(({id}) => !missionsAlreadyPlayed.includes(id));
        }
        if (availableMissions.length === 0) {
            return null;
        }
        const newMission = availableMissions[Math.floor(Math.random() * availableMissions.length)];
        return new Mission(newMission.mission, newMission.level, newMission.id);
    }
}
