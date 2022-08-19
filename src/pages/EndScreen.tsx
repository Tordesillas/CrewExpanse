import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationProp, RouteProp, StackActions} from '@react-navigation/native';
import {Background, CornerButton} from '../components';
import {Astronaut, Cogs, CrewExpanse, Play} from '../components/icons';
import Game from '../models/Game';
import {Colors} from '../utils';

interface Props {
    navigation: NavigationProp<any>;
    route: RouteProp<{params: {game: Game}}>;
}

export default class EndScreen extends React.Component<Props> {
    render() {
        const {navigation, route} = this.props;
        const {game} = route.params;

        return (
            <View style={styles.main_container}>
                <Background/>

                <CrewExpanse/>

                <View style={styles.main_content}>
                    <Text style={styles.subtitle}>Mission terminée !</Text>
                    <Astronaut size={90}/>
                    {(game.score !== null) && (
                        <Text style={styles.text}>
                            {`${game.score} point${game.score < 2 ? '' : 's'} en ${game.getMissionsCount()} mission${game.getMissionsCount() === 1 ? '' : 's'}`}
                        </Text>
                    )}
                </View>

                <CornerButton
                    icon={<Play size={50}/>}
                    onPress={() => navigation.dispatch(StackActions.replace('DifficultyChoice'))}
                    important
                    left
                />
                <CornerButton
                    icon={<Cogs size={50}/>}
                    onPress={() => navigation.navigate('Settings')}
                    important={false}
                    left={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    main_content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150
    },
    subtitle: {
        marginBottom: 50,
        fontSize: 22,
        color: Colors.WHITE
    },
    text: {
        marginTop: 50,
        fontSize: 14,
        color: Colors.WHITE
    }
});
