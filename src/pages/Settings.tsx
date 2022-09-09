import React from 'react';
import {Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {Background, Button, CheckboxButton, CornerButton} from '../components';
import {Book, CrewExpanse, LeftArrow} from '../components/icons';
import StorageService from '../services/StorageService';
import {Colors} from '../utils';

interface Props {
    navigation: NavigationProp<any>;
}

interface State {
    isSameLevel: boolean;
    isScoreComputed: boolean;
}

export default class Settings extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isSameLevel: false,
            isScoreComputed: false
        };

        StorageService.isSameDifficultyLevel().then((isSameLevel) => this.setState({isSameLevel}));
        StorageService.isScoreComputed().then((isScoreComputed) => this.setState({isScoreComputed}));
    }

    render() {
        const {navigation} = this.props;
        const {isSameLevel, isScoreComputed} = this.state;

        return (
            <SafeAreaView style={styles.main_container}>
                <Background/>

                <CrewExpanse/>

                <View style={styles.options}>
                    <CheckboxButton
                        value={isSameLevel}
                        onValueChange={(newValue) => this.setState({isSameLevel: newValue},
                            () => StorageService.setIsSameDifficultyLevel(newValue))}
                        title={"Conservation du niveau de difficulté"}
                        subtitle={"Si l'option est cochée, le niveau de difficulté ne sera pas demandé à chaque nouvelle mission."}
                    />
                    <CheckboxButton
                        value={isScoreComputed}
                        onValueChange={(newValue) => this.setState({isScoreComputed: newValue},
                            () => StorageService.setIsScoreComputed(newValue))}
                        title={"Calcul du score"}
                        subtitle={"Si l'option est cochée, une interface qui gère le score sera ajoutée durant les missions."}
                    />
                </View>

                <View style={styles.button_wrapper}>
                    <Button
                        text={"Manuel du jeu"}
                        onPress={() => Linking.openURL('https://iello.fr/wp-content/uploads/2020/05/The-Crew_Rulebook.pdf')}
                        icon={<Book/>}
                    />
                </View>

                <CornerButton
                    icon={<LeftArrow size={42}/>}
                    onPress={() => navigation.goBack()}
                    left
                    important={false}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: Colors.BLACK,
        overflow: 'hidden'
    },
    options: {
        flex: 1,
        paddingHorizontal: 30
    },
    button_wrapper: {
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 150
    }
});
