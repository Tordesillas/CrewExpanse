import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from '../utils';

interface Props {
    icon: ReactNode;
    onPress: () => void;
    important?: boolean;
    left: boolean;
    style?: ViewStyle;
}

export default class CornerButton extends React.Component<Props> {
    render() {
        const {icon, onPress, important, left, style} = this.props;

        return (
            <View style={[styles.wrapper, left ? {left: -150} : {right: -150}]}>
                <Pressable
                    style={[important ? styles.main_button : styles.secondary_button, style]}
                    android_ripple={{color: 'rgba(1,58,59,0.25)'}}
                    onPress={onPress}
                >
                    <View style={left ? styles.icon_wrapper_left : styles.icon_wrapper_right}>
                        {icon}
                    </View>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: -150,
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden'
    },
    main_button: {
        flex: 1,
        borderRadius: 150,
        backgroundColor: Colors.BLUE
    },
    secondary_button: {
        flex: 1,
        borderRadius: 150,
        borderColor: Colors.BLUE,
        borderWidth: 4
    },
    icon_wrapper_left: {
        position: "absolute",
        bottom: 180,
        left: 180
    },
    icon_wrapper_right: {
        position: "absolute",
        bottom: 176,
        right: 180
    }
});
