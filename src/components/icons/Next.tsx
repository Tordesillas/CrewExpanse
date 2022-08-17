import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
    size?: number;
    color?: string;
}

export const Next = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 512 512">
        <Path
            d="M291 266v-20h10v-39.7l86 49.7-86 49.7V266zM55 266v-20h10v-39.7l86 49.7-86 49.7V266z"
            fill={props.color || '#2ec728'}
        />
        <Path
            d="M241 296.4v113.2L507 256 241 102.4v147.8L25 374.9V286H5v123.6l256-147.8V137.1L467 256 261 374.9v-90zM5 246h20v20H5z"
            fill={props.color || '#095006'}
        />
        <Path
            d="m25 137.1 186 107.4 20-11.6L5 102.4V226h20z"
            fill={props.color || '#095006'}
        />
        <Path
            d="M45 266v74.3L191 256 45 171.7V246h20v-39.7l86 49.7-86 49.7V266zM281 266v74.3L427 256l-146-84.3V246h20v-39.7l86 49.7-86 49.7V266z"
            fill={props.color || '#095006'}
        />
    </Svg>
);
