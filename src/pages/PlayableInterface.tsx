import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, RouteProp, StackActions} from '@react-navigation/native';
import StyledText from 'react-native-styled-text';
import {Background, CornerButton} from '../components';
import {Close, DistressSignal, Next, Retry, SpaceShip, TransparentTexture} from '../components/icons';
import StorageService from '../services/StorageService';
import Game from '../models/Game';
import Mission from '../models/Mission';
import MissionsFactory from '../models/MissionsFactory';
import {Colors, Fonts} from '../utils';

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
            props.navigation.dispatch(StackActions.replace('EndScreen', {game}));
        }

        this.state = {
            mission: newMission || new Mission('', 0, 0, [], []),
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

    renderIconsLine(icons: Array<string>): ReactNode | null {
        if (!icons.length) return null;

        return (
            <View style={styles.icons_line}>
                {icons.map((icon, i) => (
                    <View key={i} style={styles.icon}>
                        {MissionsFactory.generateObjectiveIcon(icon)}
                    </View>
                ))}
            </View>
        );
    }

    render() {
        const {navigation, route} = this.props;
        const {mission, score, distressSignal} = this.state;
        const {game} = route.params;

        return (
            <SafeAreaView style={styles.main_container}>
                <Background/>

                <View style={styles.safe_area}>
                    <TouchableOpacity style={styles.close_button} onPress={() => navigation.dispatch(StackActions.replace('EndScreen', {game}))}>
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
                            <View style={StyleSheet.absoluteFill}>
                                <TransparentTexture/>
                            </View>
                            {this.renderIconsLine(mission.primaryIcons)}
                            {this.renderIconsLine(mission.secondaryIcons)}
                            {mission.primaryIcons?.length > 0 && (
                                <View style={styles.separator}/>
                            )}
                            <ScrollView style={styles.mission_text_wrapper}>
                                <StyledText style={styles.mission_text} textStyles={textStyles}>
                                    {mission.text}
                                </StyledText>
                            </ScrollView>
                            <Text style={styles.mission_counter}>Mission n°{mission.id}</Text>
                        </View>
                    </View>
                </View>

                {score !== null && (
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
                            <DistressSignal size={46}/>
                        </TouchableOpacity>
                    </View>
                )}

                {(score === null) ? (
                    <CornerButton
                        onPress={() => this.newMission()}
                        icon={<Next size={60}/>}
                        left
                        important
                    />
                ) : (
                    <>
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
        backgroundColor: Colors.DARK_CYAN,
        overflow: 'hidden'
    },
    safe_area: {
        flex: 1
    },
    close_button: {
        zIndex: 2,
        width: 62,
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
        height: 70,
        width: 60,
        backgroundColor: Colors.LIGHT_CYAN
    },
    triangle: {
        height: 0,
        width: 0,
        borderTopWidth: 15,
        borderRightWidth: 30,
        borderLeftWidth: 30,
        borderTopColor: Colors.LIGHT_CYAN,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent'
    },
    counter: {
        position: 'absolute',
        top: 20,

        fontSize: 26,
        fontFamily: Fonts.Andika.Bold,
        color: Colors.DARK_CYAN
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
        padding: 10,
        marginTop: 10
    },
    main_content: {
        flex: 1,
        aspectRatio: 1,
        paddingTop: 8,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: '#DFC8B8',
        borderRadius: 20,
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {width: 0, height: 2}
    },
    separator: {
        height: 1,
        width: '50%',
        backgroundColor: Colors.DARK_ORANGE,
        marginTop: 10
    },
    mission_text_wrapper: {
        marginTop: 16,
        paddingHorizontal: '3%'
    },
    mission_text: {
        fontSize: 16,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.BLACK
    },
    icons_line: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        margin: 2
    },
    mission_counter: {
        position: 'absolute',
        bottom: -1,
        right: 12,

        fontSize: 12,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.GREY
    },
    score_tools: {
        position: 'absolute',
        bottom: 160,
        left: 15,
        right: 15,
        flexDirection: 'row'
    },
    score_container: {
        width: '50%',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.LIGHT_CYAN
    },
    score_label: {
        fontSize: 14,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.WHITE
    },
    score: {
        fontSize: 14,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.ORANGE
    },
    distress_signal_shape: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 25,
        borderColor: Colors.GREEN,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const textStyles = StyleSheet.create({
    fi: {
        fontFamily: Fonts.Andika.Italic
    },
    fb: {
        fontFamily: Fonts.Andika.Bold
    },
    fbi: {
        fontFamily: Fonts.Andika.BoldItalic
    },
    cp: {
        color: Colors.DARK_PINK
    },
    cb: {
        color: Colors.DARK_BLUE
    },
    cg: {
        color: Colors.DARK_OLIVE
    },
    cy: {
        color: Colors.DARK_YELLOW
    },
    cv: {
        color: Colors.PURPLE
    }
});
