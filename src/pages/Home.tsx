import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Background, Button} from '../components';
import {SpaceShip} from '../components/icons';
import {Colors} from '../utils';

export default class Home extends React.Component {
    render() {
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
                            Améliorez votre expérience The Crew avec de nouveaux objectifs !
                        </Text>
                    </View>
                </View>

                <View style={styles.button_wrapper}>
                    <Button
                      text={"Lancer une partie"}
                      onPress={() => {}}
                      important
                    />
                </View>
                <View style={styles.button_wrapper}>
                    <Button
                      text={"Réglages"}
                      onPress={() => {}}
                    />
                </View>
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
        alignItems: 'center'
    },
    main_text_wrapper: {
        padding: 30,
    },
    main_text: {
        fontSize: 14,
        color: Colors.WHITE
    },
    button_wrapper: {
        paddingBottom: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
