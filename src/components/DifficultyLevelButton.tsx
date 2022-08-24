import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Dices, SpaceShip} from './icons';
import {Colors, DifficultyLevel, Fonts} from '../utils';

interface Props {
    onPress: () => void;
    difficultyLevel: DifficultyLevel;
}

export default class DifficultyLevelButton extends React.Component<Props> {
    getDifficultyText(difficultyLevel: DifficultyLevel): string {
        switch (difficultyLevel) {
            case 'BEGINNER':
                return 'Débutant';
            case 'CONFIRMED':
                return 'Confirmé';
            case 'EXPERT':
                return 'Expert';
            case 'RANDOM':
                return 'Aléatoire';
        }
    }

    render() {
        const {difficultyLevel, onPress} = this.props;

        return (
            <View style={styles.wrapper}>
                <Pressable
                    style={styles.button}
                    android_ripple={{color: 'rgba(1,58,59,0.25)'}}
                    onPress={onPress}
                >
                    <Text style={styles.text}>{this.getDifficultyText(difficultyLevel)}</Text>
                    <View style={{flex: 1}}/>
                    {[...Array(['BEGINNER', 'CONFIRMED', 'EXPERT'].indexOf(difficultyLevel) + 1)].map((_, i) => (
                        <View key={i} style={styles.icon_wrapper}>
                            <SpaceShip color={Colors.ORANGE} size={20}/>
                        </View>
                    ))}
                    {(difficultyLevel === 'RANDOM') && (
                        <Dices color={Colors.ORANGE} size={25}/>
                    )}
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    button: {
        height: 60,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.BLUE
    },
    text: {
        fontSize: 16,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.VERY_DARK_BLUE
    },
    icon_wrapper: {
        paddingLeft: 3
    }
});
