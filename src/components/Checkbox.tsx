import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../utils';

interface Props {
    value: boolean;
    onValueChange: (value: boolean) => void;
    size?: number;
    color?: string;
}

export default class Checkbox extends React.Component<Props> {
    render() {
        const {value, onValueChange, size, color} = this.props;

        return (
            <TouchableOpacity onPress={() => onValueChange(!value)}>
                <Svg width={size || 32} height={size || 32} viewBox="0 0 15 15">
                    <Path
                        d="M2.5.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z"
                        stroke={color || Colors.WHITE}
                        fill="none"
                    />
                    {value && (
                        <Path
                            d="m4.5 7.5 2 2 4-4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#2de125"
                            fill="none"
                        />
                    )}
                </Svg>
            </TouchableOpacity>
        );
    }
}
