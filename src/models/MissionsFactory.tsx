import React, {ReactNode} from 'react';
import Mission from './Mission';
import {
    Card, TokenArrow1, TokenArrow2, TokenArrow3, TokenArrow4, TokenOverlay, Ones, Player, Slash, Balance, Commander,
    YellowCard, GreenCard, PinkCard, BlueCard, CommunicationToken, AllColorCards, GiveLeft, Hand, ThreeFaceDown,
    OverlayCards, OverlayCommunicationTokens, GiveCard, Nines, RocketCards, Token1, Token2, Token3, Token4, Token5, TokenOmega
} from '../components/icons';
import {Colors, DifficultyLevel} from '../utils';
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
        return new Mission(newMission.fr, newMission.level, newMission.id, newMission.primary_icons, newMission.secondary_icons);
    }

    static generateObjectiveIcon(iconId: string): ReactNode | null {
        switch (iconId) {
            case 'commander':
                return <Commander/>;
            case 'communication':
                return <CommunicationToken/>;
            case 'communicationCrossed':
                return <TokenOverlay width={36} height={36}><CommunicationToken/></TokenOverlay>;
            case 't1':
                return <Token1/>;
            case 't2':
                return <Token2/>;
            case 't3':
                return <Token3/>;
            case 't4':
                return <Token4/>;
            case 't5':
                return <Token5/>;
            case 'to':
                return <TokenOmega/>;
            case 'ta1':
                return <TokenArrow1/>;
            case 'ta2':
                return <TokenArrow2/>;
            case 'ta3':
                return <TokenArrow3/>;
            case 'ta4':
                return <TokenArrow4/>;

            case 'blueCard':
                return <BlueCard/>;
            case 'greenCard':
                return <GreenCard/>;
            case 'pinkCard':
                return <PinkCard/>;
            case 'yellowCard':
                return <YellowCard/>;
            case 'blueCardCrossed':
                return <TokenOverlay width={45} height={45}><BlueCard/></TokenOverlay>;
            case 'greenCardCrossed':
                return <TokenOverlay width={45} height={45}><GreenCard/></TokenOverlay>;
            case 'pinkCardCrossed':
                return <TokenOverlay width={45} height={45}><PinkCard/></TokenOverlay>;
            case 'yellowCardCrossed':
                return <TokenOverlay width={45} height={45}><YellowCard/></TokenOverlay>;

            case 'allColorCards':
                return <AllColorCards/>;
            case 'allColorCardsCrossed':
                return <AllColorCards crossed/>;
            case 'rockets':
                return <RocketCards/>;
            case 'threeFaceDown':
                return <ThreeFaceDown/>;
            case 'giveCard':
                return <GiveCard/>;
            case 'ones':
                return <Ones/>;
            case 'nines':
                return <Nines/>;
            case 'overlayCards':
                return <OverlayCards/>;
            case 'communicationTokens':
                return <OverlayCommunicationTokens/>;

            case 'player':
                return <Player/>;
            case 'confusedPlayer':
                return <Player confused/>;
            case 'arrow':
            case 'arrowLeft':
                return <GiveLeft/>;
            case 'slash':
                return <Slash/>;
            case 'hand':
                return <Hand/>;
            case 'balance':
                return <Balance/>;
        }

        if (iconId.includes('Card') || iconId.includes('card')) {
            let color = null;
            if (iconId.includes('grey')) {
                color = Colors.GREY;
            } else if (iconId.includes('red')) {
                color = Colors.RED;
            }
            const number = (iconId.match(/\d/g) ?? []).join('');
            return <Card color={color} number={number}/>;
        }
        if (iconId.includes('communication')) {
            const number = (iconId.match(/\d/g) ?? []).join('');
            return <TokenOverlay width={36} height={36} number={number}><CommunicationToken/></TokenOverlay>;
        }

        return null;
    }
}
