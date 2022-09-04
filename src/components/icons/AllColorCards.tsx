import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BlueCard} from './BlueCard';
import {Close} from './Close';
import {GreenCard} from './GreenCard';
import {PinkCard} from './PinkCard';
import {YellowCard} from './YellowCard';
import {Colors} from '../../utils';

interface Props {
    crossed?: boolean
}

export const AllColorCards = (props: Props) => (
    <View style={styles.main_container}>
        <View style={styles.top_card}>
            <BlueCard/>
        </View>
        <View style={styles.left_card}>
            <PinkCard/>
        </View>
        <View style={styles.right_card}>
            <GreenCard/>
        </View>
        <View style={styles.bottom_card}>
            <YellowCard/>
        </View>
        {props.crossed && (
            <View style={styles.cross_wrapper}>
                <Close size={36} color={Colors.RED} />
            </View>
        )}
    </View>
);

const styles = StyleSheet.create({
    main_container: {
        height: 70,
        width: 55
    },
    top_card: {
        position: 'absolute',
        left: 20,
        top: 0
    },
    left_card: {
        position: 'absolute',
        left: 0,
        top: 10
    },
    right_card: {
        position: 'absolute',
        right: 0,
        top: 15
    },
    bottom_card: {
        position: 'absolute',
        left: 10,
        bottom: 0
    },
    cross_wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
