import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Colors, Fonts} from '../utils';

interface Props {
    text: string;
    onPress: () => void;
    important?: boolean;
    icon?: ReactNode;
    style?: ViewStyle;
}

export default class Button extends React.Component<Props> {
    render() {
        const {text, onPress, important, icon, style} = this.props;

        return (
            <View style={styles.wrapper}>
                <Pressable
                    style={[styles.button, important ? styles.main_button : styles.secondary_button, style]}
                    android_ripple={{color: 'rgba(1,58,59,0.25)'}}
                    onPress={onPress}
                >
                    <Text style={styles.text}>{text}</Text>
                    {icon && (
                        <View style={styles.icon_wrapper}>
                            {icon}
                        </View>
                    )}
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
    button: {
        height: 60,
        borderRadius: 5,
        alignItems: 'center'
    },
    main_button: {
        flexDirection: 'row',
        backgroundColor: Colors.BLUE
    },
    secondary_button: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: Colors.BLUE
    },
    text: {
        width: 180,
        textAlign: 'center',

        fontSize: 16,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.VERY_DARK_BLUE
    },
    icon_wrapper: {
        paddingRight: 10
    }
});
