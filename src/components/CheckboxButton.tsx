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
    checkbox_wrapper: {
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
        fontFamily: Fonts.Andika.Regular,
        color: Colors.WHITE
    },
    subtitle: {
        marginTop: -5,

        fontSize: 14,
        fontFamily: Fonts.Andika.Italic,
        color: Colors.ORANGE
    }
});
