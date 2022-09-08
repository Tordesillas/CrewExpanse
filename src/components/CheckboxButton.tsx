import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Checkbox from './Checkbox';
import {Colors, Fonts} from '../utils';

interface Props {
    value: boolean;
    onValueChange: (value: boolean) => void;
    title: string;
    subtitle?: string;
}

export default class CheckboxButton extends React.Component<Props> {
    render() {
        const {value, onValueChange, title, subtitle} = this.props;

        return (
            <View style={styles.main_container}>
                <View style={styles.checkbox_wrapper}>
                    <Checkbox
                        value={value}
                        onValueChange={(newValue) => onValueChange(newValue)}
                    />
                </View>

                <View style={[styles.text_container, subtitle ? {flex: 1} : undefined]}>
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
        marginBottom: 30,
        flexDirection: 'row'
    },
    checkbox_wrapper: {
        width: 50,
        height: 50,
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_container: {
        marginRight: 5,
        flexDirection: 'column'
    },
    title_wrapper: {
        height: 50,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.WHITE
    },
    subtitle: {
        marginTop: -8,

        fontSize: 14,
        fontFamily: Fonts.Andika.Italic,
        color: Colors.ORANGE
    }
});
