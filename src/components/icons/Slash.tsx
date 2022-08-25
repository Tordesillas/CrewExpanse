import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../../utils';

interface Props {
    size?: number;
    color?: string;
}

export const Slash = (props: Props) => (
    <Svg width={props.size || 13} height={props.size || 30} viewBox="0 0 8 20">
        <G transform="translate(-6)">
            <Path
                d="m12.5 3.5-4 14"
                fill="none"
                stroke={props.color || Colors.BLACK}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
    </Svg>
);
