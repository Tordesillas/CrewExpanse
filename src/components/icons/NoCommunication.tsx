import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Text} from 'react-native-svg';
import {Close} from './Close';
import {CommunicationToken} from './CommunicationToken';
import {Colors, Fonts} from '../../utils';

interface Props {
    number?: number;
}

export const NoCommunication = (props: Props) => (
    <View style={styles.main_container}>
        <View style={styles.component_wrapper}>
            <CommunicationToken size={36}/>
        </View>
        <View style={styles.component_wrapper}>
            {props.number ? (
                <Svg width="100%" height="100%" viewBox="0 0 80 80">
                    <Text
                        fill={Colors.RED}
                        fontSize="80"
                        fontFamily={Fonts.Andika.Bold}
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        stroke={Colors.WHITE}>
                        {props.number}
                    </Text>
                </Svg>
            ) : (
                <Close size={36} color={Colors.RED}/>
            )}
        </View>
    </View>
);

const styles = StyleSheet.create({
    main_container: {
        width: 36,
        height: 36
    },
    component_wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
