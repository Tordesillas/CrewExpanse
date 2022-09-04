import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from './Card';
import {Colors} from '../../utils';

export const OverlayCards = () => (
    <View style={styles.main_container}>
        <Card height={42} color={Colors.GREY}/>
        <View style={styles.second_card}>
            <Card height={42} color={Colors.GREY}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    main_container: {
        height: 42,
        aspectRatio: 1,
        alignItems: 'center'
    },
    second_card: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        transform: [{rotate: '90deg'}]
    }
});
