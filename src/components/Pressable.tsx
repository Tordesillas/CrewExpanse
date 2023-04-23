import React, {ReactNode} from 'react';
import {Platform, Pressable as RNPressable, type PressableProps, ViewStyle} from "react-native";

interface Props {
    children?: ReactNode;
    style?: ViewStyle;
}

export default class Pressable extends React.Component<Props & PressableProps> {
    render() {
        return (
            <RNPressable
                {...this.props}
                style={({pressed}) => [{opacity: (Platform.OS === "ios" && pressed) ? 0.5 : 1}, this.props.style]}
            >
                {this.props.children}
            </RNPressable>
        );
    }
}