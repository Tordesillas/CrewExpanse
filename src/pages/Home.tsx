import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {Background, CornerButton} from '../components';
import {Cogs, Play, SpaceShip} from '../components/icons';
import {Colors} from '../utils';

interface Props {
    navigation: NavigationProp<any>;
}

export default class Home extends React.Component<Props> {
    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.main_container}>
                <Background/>

                <Text style={styles.title}>CrewExpanse</Text>

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
                    onPress={() => {}}
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
        flex: 1
    },
    title: {
        paddingTop: 50,
        paddingBottom: 30,
        width: '100%',
        textAlign: 'center',
        fontSize: 50,
        color: Colors.BLUE
    },
    main_content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    main_text_wrapper: {
        padding: 30,
    },
    main_text: {
        fontSize: 14,
        color: Colors.WHITE
    }
});
