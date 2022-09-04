import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommunicationToken} from './CommunicationToken';

export const OverlayCommunicationTokens = () => (
    <View style={styles.main_container}>
        <View style={styles.first_token}>
            <CommunicationToken size={30}/>
        </View>
        <View style={styles.second_token}>
            <CommunicationToken size={30}/>
        </View>
        <View style={styles.third_token}>
            <CommunicationToken size={30}/>
        </View>
        <View style={styles.fourth_token}>
            <CommunicationToken size={30}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    main_container: {
        height: 42,
        aspectRatio: 1
    },
    first_token: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        transform: [{rotate: '340deg'}]
    },
    second_token: {
        position: 'absolute',
        left: 0,
        bottom: 3,
        alignItems: 'center',
        transform: [{rotate: '330deg'}]
    },
    third_token: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        transform: [{rotate: '180deg'}]
    },
    fourth_token: {
        position: 'absolute',
        right: 0,
        top: 5,
        alignItems: 'center',
        transform: [{rotate: '30deg'}]
    }
});
