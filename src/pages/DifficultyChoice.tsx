import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationProp, RouteProp, StackActions} from '@react-navigation/native';
import {Background, CheckboxButton, CornerButton, DifficultyLevelButton} from '../components';
import {LeftArrow} from '../components/icons';
import StorageService from '../services/StorageService';
import Game from '../models/Game';
import {Colors, DifficultyLevel, Fonts} from '../utils';

interface Props {
    navigation: NavigationProp<any>;
    route: RouteProp<{params: {game?: Game}}>;
}

interface State {
    isSameLevel: boolean;
}

export default class DifficultyChoice extends React.Component<Props, State> {
    isScoreComputed: boolean = false;

    constructor(props: Props) {
        super(props);

        this.state = {
            isSameLevel: false
        };

        StorageService.isSameDifficultyLevel().then((isSameLevel) => this.setState({isSameLevel}));
        StorageService.isScoreComputed().then((isScoreComputed) => this.isScoreComputed = isScoreComputed);
    }

    launchMission(difficultyLevel: DifficultyLevel) {
        const {navigation, route} = this.props;
        let game = route.params?.game;

        if (game) {
            game.difficultyLevel = difficultyLevel;
        } else {
            game = new Game(difficultyLevel, this.isScoreComputed);
        }
        navigation.dispatch(StackActions.replace('PlayableInterface', {game}));
    }

    render() {
        const {navigation, route} = this.props;
        const {isSameLevel} = this.state;

        return (
            <View style={styles.main_container}>
                <Background/>

                <Text style={styles.title}>Niveaux de difficulté</Text>

                <View style={styles.buttons_container}>
                    <DifficultyLevelButton
                        onPress={() => this.launchMission('BEGINNER')}
                        difficultyLevel='BEGINNER'
                    />
                    <DifficultyLevelButton
                        onPress={() => this.launchMission('CONFIRMED')}
                        difficultyLevel='CONFIRMED'
                    />
                    <DifficultyLevelButton
                        onPress={() => this.launchMission('EXPERT')}
                        difficultyLevel='EXPERT'
                    />
                    <DifficultyLevelButton
                        onPress={() => this.launchMission('RANDOM')}
                        difficultyLevel='RANDOM'
                    />
                </View>

                <View style={styles.switch_button}>
                    <CheckboxButton
                        value={isSameLevel}
                        onValueChange={(newValue) => this.setState({isSameLevel: newValue},
                            () => StorageService.setIsSameDifficultyLevel(newValue))}
                        title={"Conservation du niveau de difficulté"}
                    />
                </View>

                {!route.params?.game && (
                    <CornerButton
                        icon={<LeftArrow size={42}/>}
                        onPress={() => navigation.goBack()}
                        left
                        important={false}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: Colors.BLACK,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: '100%',
        textAlign: 'center',
        paddingBottom: 40,
        fontSize: 24,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.WHITE
    },
    buttons_container: {
        width: '60%'
    },
    switch_button: {
        paddingTop: 20,
        paddingHorizontal: 30
    }
});
