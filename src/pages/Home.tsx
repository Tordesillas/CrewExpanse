import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {Background, CornerButton} from '../components';
import {Cogs, CrewExpanse, Play, SpaceShip} from '../components/icons';
import {Colors, Fonts} from '../utils';

interface Props {
    navigation: NavigationProp<any>;
}

export default class Home extends React.Component<Props> {
    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.main_container}>
                <Background/>

                <CrewExpanse/>

                <View style={styles.main_content}>
                    <SpaceShip size={90}/>
                    <View style={styles.main_text_wrapper}>
                        <Text style={styles.main_text}>
                            Votre équipage est au complet ?{'\n'}
                            Les cartes du jeu The Crew sont distribuées ?{'\n'}
                            Améliorez dès maintenant votre expérience The Crew avec de nouveaux objectifs !
                        </Text>
                    </View>
                </View>

                <CornerButton
                    icon={<Play size={50}/>}
                    onPress={() => navigation.navigate('DifficultyChoice')}
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
    main_text_wrapper: {
        padding: 30,
    },
    main_text: {
        fontSize: 16,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.WHITE
    }
});
