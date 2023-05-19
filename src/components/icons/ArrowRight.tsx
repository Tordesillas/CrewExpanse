import React from 'react';
import Svg, {Path} from "react-native-svg";
import {Colors} from '../../utils';

interface Props {
    size?: number;
    color?: string;
}

export const ArrowRight = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 542 482">
        <Path
            fill={Colors.CYAN}
            d="M194.207 114.759 0 256l194.207 141.241v-97.103h105.931v-88.276H194.207zM353.103 211.862c-9.71 0-17.655 7.945-17.655 17.655v52.966c0 9.71 7.945 17.655 17.655 17.655s17.655-7.945 17.655-17.655v-52.966c.001-9.71-7.944-17.655-17.655-17.655M423.724 211.862c-9.71 0-17.655 7.945-17.655 17.655v52.966c0 9.71 7.945 17.655 17.655 17.655s17.655-7.945 17.655-17.655v-52.966c0-9.71-7.945-17.655-17.655-17.655M494.345 211.862c-9.71 0-17.655 7.945-17.655 17.655v52.966c0 9.71 7.945 17.655 17.655 17.655S512 292.193 512 282.483v-52.966c0-9.71-7.945-17.655-17.655-17.655"
            stroke={Colors.DARK_CYAN}
            strokeWidth={20}
            strokeLinejoin="round"
            transform="translate(-20 20) rotate(180 271 241)"
        />
    </Svg>
);