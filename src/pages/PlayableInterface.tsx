import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, RouteProp, StackActions} from '@react-navigation/native';
import {Background, CornerButton} from '../components';
import {Close, DistressSignal, Next, Retry, SpaceShip} from '../components/icons';
import StorageService from '../services/StorageService';
import Game from '../models/Game';
import Mission from '../models/Mission';
import {Colors} from '../utils';

interface Props {
    navigation: NavigationProp<any>;
    route: RouteProp<{params: {game: Game}}>;
}

interface State {
    mission: Mission;
    score: number | null;
    distressSignal: boolean;
}

export default class PlayableInterface extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const {game} = props.route.params;
        const newMission = game.pickNewMission();
        if (!newMission) {
            //props.navigation.navigate('EndScreen', {game}); TODO
            props.navigation.navigate('Home');
        }

        this.state = {
            mission: newMission || new Mission('', 0, 0),
            score: game.score,
            distressSignal: false
        };
    }

    newMission() {
        const {navigation, route} = this.props;
        StorageService.isSameDifficultyLevel()
            .then((skipChoice) =>
                navigation.dispatch(StackActions.replace(skipChoice ? 'PlayableInterface' : 'DifficultyChoice', {game: route.params.game}))
            );
    }

    failMission() {
        const {game} = this.props.route.params;
        if (game.canFail()) {
            game.score!++;
            this.setState({score: game.score});
        }
    }

    onDistressSignalCalled() {
        const {game} = this.props.route.params;
        const {distressSignal} = this.state;

        if (distressSignal) {
            game.score!--;
        } else {
            game.score!++;
        }
        this.setState({distressSignal: !distressSignal, score: game.score});
    }

    render() {
        const {navigation, route} = this.props;
        const {mission, score, distressSignal} = this.state;
        const {game} = route.params;

        return (
            <SafeAreaView style={styles.main_container}>
                <Background/>

                <TouchableOpacity style={styles.close_button} onPress={() => navigation.goBack() /* TODO navigation.replace('EndScreen') */}>
                    <Close size={20}/>
                </TouchableOpacity>

               <View style={styles.missions_counter}>
                   <View style={styles.square}/>
                   <View style={styles.triangle}/>
                   <Text style={styles.counter}>{game.getMissionsCount()}</Text>
               </View>

                <View style={styles.difficulty}>
                    {[...Array(['BEGINNER', 'CONFIRMED', 'EXPERT'].indexOf(mission.difficultyLevel) + 1)].map((_, i) => (
                        <View key={i} style={styles.space_ship_wrapper}>
                            <SpaceShip color={Colors.ORANGE} size={20}/>
                        </View>
                    ))}
                </View>

                <View style={styles.main_content_wrapper}>
                    <View style={styles.main_content}>
                        <Text style={styles.mission_text}>{mission.text}</Text>
                        <Text style={styles.mission_counter}>Mission n°{mission.id}</Text>
                    </View>
                </View>

                {(score === null) ? (
                    <CornerButton
                        onPress={() => this.newMission()}
                        icon={<Next size={60}/>}
                        left
                        important
                    />
                ) : (
                    <>
                        <View style={styles.score_tools}>
                            <View style={styles.score_container}>
                                <Text style={styles.score_label}>Score</Text>
                                <View style={{flex: 1}}/>
                                <Text style={styles.score}>{score}</Text>
                            </View>
                            <View style={{flex: 1}}/>
                            <TouchableOpacity
                                onPress={() => this.onDistressSignalCalled()}
                                style={[styles.distress_signal_shape, {borderWidth: distressSignal ? 2 : 0}]}
                            >
                                <DistressSignal size={50}/>
                            </TouchableOpacity>
                        </View>

                        <CornerButton
                            onPress={() => this.newMission()}
                            icon={<Next size={60}/>}
                            left
                            important
                        />
                        <CornerButton
                            onPress={() => this.failMission()}
                            icon={<Retry size={50}/>}
                            left={false}
                            important={false}
                        />
                    </>
                )}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    close_button: {
        padding: 20
    },
    missions_counter: {
        position: 'absolute',
        top: -20,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    square: {
        height: 80,
        width: 60,
        backgroundColor: Colors.BLUE
    },
    triangle: {
        height: 0,
        width: 0,
        borderTopWidth: 15,
        borderRightWidth: 30,
        borderLeftWidth: 30,
        borderTopColor: Colors.BLUE,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent'
    },
    counter: {
        position: 'absolute',
        top: 30,

        fontSize: 26,
        color: Colors.VERY_DARK_BLUE
    },
    difficulty: {
        position: 'absolute',
        top: 20,
        right: 20,
        flexDirection: 'row'
    },
    space_ship_wrapper: {
        paddingLeft: 3
    },
    main_content_wrapper: {
        width: '100%',
        aspectRatio: 1,
        padding: 20,
        marginTop: 5
    },
    main_content: {
        flex: 1,
        aspectRatio: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFC8B8',
        borderRadius: 20
    },
    mission_text: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.BLACK
    },
    mission_counter: {
        position: 'absolute',
        bottom: 2,
        right: 10,

        fontSize: 12,
        color: Colors.GREY
    },
    score_tools: {
        flexDirection: 'row'
    },
    score_container: {
        width: '40%',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.BLUE
    },
    score_label: {
        fontSize: 14,
        color: Colors.WHITE
    },
    score: {
        fontSize: 14,
        color: Colors.ORANGE
    },
    distress_signal_shape: {
        height: 54,
        marginRight: 20,
        aspectRatio: 1,
        borderRadius: 27,
        borderColor: Colors.GREEN,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
