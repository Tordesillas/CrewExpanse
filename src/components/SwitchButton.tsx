import React from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {Colors} from '../utils';

interface Props {
    value: boolean;
    onValueChange: (value: boolean) => void;
    title: string;
    subtitle?: string;
}

export default class SwitchButton extends React.Component<Props> {
    render() {
        const {value, onValueChange, title, subtitle} = this.props;

        return (
            <View style={styles.main_container}>
                <View style={styles.switch_wrapper}>
                    <Switch
                        value={value}
                        onValueChange={(newValue) => onValueChange(newValue)}
                        trackColor={Platform.OS === 'android' ? undefined : {true: Colors.BLACK, false: Colors.WHITE}}
                        thumbColor={Platform.OS === 'android' ? (value ? Colors.BLUE : Colors.WHITE) : undefined}
                    />
                </View>

                <View style={styles.text_container}>
                    <View style={styles.title_wrapper}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    {subtitle && (
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: '100%',
        marginBottom: 30,
        flexDirection: 'row'
    },
    switch_wrapper: {
        width: 60,
        height: 60,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_container: {
        flex: 1,
        flexDirection: 'column'
    },
    title_wrapper: {
        height: 57,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        color: Colors.WHITE
    },
    subtitle: {
        marginTop: -5,
        color: Colors.ORANGE,
        fontStyle: 'italic'
    }
});
