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

                {subtitle ? (
                    <View style={styles.text_container}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                ) : (
                    <View style={[styles.text_container, {justifyContent: 'center'}]}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginBottom: 15,
        flexDirection: 'row'
    },
    checkbox_wrapper: {
        width: 50,
        height: 45,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_container: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.Andika.Regular,
        color: Colors.WHITE,
        lineHeight: 24
    },
    subtitle: {
        fontSize: 12,
        fontFamily: Fonts.Andika.Italic,
        color: Colors.ORANGE,
        lineHeight: 18
    }
});
