import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Colors} from '../utils';

interface Props {
    text: string;
    onPress: () => void;
    style?: ViewStyle;
    important?: boolean;
}

export default class Button extends React.Component<Props> {
    render() {
        const {important, text, onPress, style} = this.props;

        return (
            <View style={styles.wrapper}>
                <Pressable
                    style={[important ? styles.main_button : styles.secondary_button, style]}
                    android_ripple={{color: 'rgba(1,58,59,0.25)'}}
                    onPress={onPress}
                >
                    <Text style={styles.text}>{text}</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        overflow: 'hidden'
    },
    main_button: {
        borderRadius: 5,
        backgroundColor: Colors.BLUE
    },
    secondary_button: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.BLUE
    },
    text: {
        width: 200,
        padding: 20,
        textAlign: 'center',

        fontSize: 14,
        color: Colors.VERY_DARK_BLUE
    }
});
