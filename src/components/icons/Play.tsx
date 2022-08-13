import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../utils';

interface Props {
    size?: number;
    color?: string;
}

export const Play = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 512 512">
        <Path
            d="M49.106 512.001c-5.425 0-10.702-2.807-13.623-7.836-4.362-7.515-1.806-17.144 5.707-21.507L431.574 256 64.824 43.063v336.659c0 8.69-7.046 15.734-15.734 15.734s-15.734-7.044-15.734-15.734V15.735A15.735 15.735 0 0 1 56.991 2.128l413.821 240.265a15.735 15.735 0 0 1 0 27.214L56.992 509.87a15.651 15.651 0 0 1-7.886 2.131z"
            fill={props.color || Colors.VERY_DARK_BLUE}
        />
        <Path
            d="M114.873 132.274 335.607 256 114.873 379.724z"
            fill={props.color || Colors.DARK_BLUE}
        />
        <Path
            d="M114.873 395.459a15.735 15.735 0 0 1-15.735-15.734V132.274a15.73 15.73 0 0 1 7.781-13.575 15.73 15.73 0 0 1 15.646-.149l220.734 123.725c4.966 2.783 8.04 8.032 8.04 13.725s-3.074 10.942-8.04 13.725L122.565 393.45a15.734 15.734 0 0 1-7.692 2.009zm15.734-236.328v193.738L303.428 256l-172.821-96.869z"
            fill={props.color || Colors.VERY_DARK_BLUE}
        />
    </Svg>
);
