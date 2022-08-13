import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Defs, RadialGradient, Rect, Stop} from 'react-native-svg';

export default class Background extends React.Component {
    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean {
        return false;
    }

    render() {
        return (
            <View style={StyleSheet.absoluteFill}>
                <Svg width='100%' height='100%' preserveAspectRatio='xMinYMin slice' viewBox="0 0 1000 1000">
                    <Defs>
                        <RadialGradient id="grad" cx={0.5} cy={1.5} r={1.5}>
                            <Stop offset="0%" stopColor="#8DFAFD"/>
                            <Stop offset="30%" stopColor="#05F6FB"/>
                            <Stop offset="60%" stopColor="#027174"/>
                            <Stop offset="90%" stopColor="#001718"/>
                            <Stop offset="100%" stopColor="#000808"/>
                        </RadialGradient>
                    </Defs>
                    <Rect
                        x="0"
                        y="0"
                        width='101%'
                        height='101%'
                        fill="url(#grad)"
                    />
                </Svg>
            </View>
        );
    }
}
