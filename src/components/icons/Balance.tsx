import React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {Colors} from '../../utils';

export const Balance = () => (
    <Svg width={40} height={40} viewBox="0 0 64 64">
        <G fill={Colors.DARK_CYAN}>
            <Path d="M23.6 36.7H2.9l10.3-26.2 10.4 26.2m-18-1.9h15.3l-7.7-19.5-7.6 19.5M61.1 36.7H40.4l10.3-26.2 10.4 26.2m-18-1.9h15.3l-7.7-19.5-7.6 19.5" />
        </G>
        <Path
            d="M50.3 10.2s-2.2-.8-3.4-1.3C42.6 7.1 37.3 5 32 5S21.4 7.2 17.1 9c-1.2.5-3.4 1.3-3.4 1.3l-3.3 2.5s2.7 1.7 4 1.2c1.1-.4 2.2-.9 3.5-1.4C22 10.9 27.1 8.8 32 8.8s10 2.1 14.1 3.8c1.2.5 2.4 1 3.5 1.4 1.4.5 4-1.2 4-1.2l-3.3-2.6"
            fill={Colors.GREY}
        />
        <G fill={Colors.CYAN}>
            <Path d="M2 34.8C2 41 7 46 13.2 46s11.2-5 11.2-11.2H2zM39.5 34.8c0 6.2 5 11.2 11.2 11.2S62 41 62 34.8H39.5z" />
        </G>
        <Path fill={Colors.GREY} d="M30.1 12.3h3.8v41.2h-3.8z" />
        <Path fill="#e6e6e6" d="M29 18.6h6.1v34.9H29z" />
        <Path fill="#545b60" d="M27.7 36.7h8.6v19.7h-8.6z" />
        <Circle cx={13.2} cy={13.2} r={3.8} fill="#dbb471" />
        <G fill="#545b60">
            <Circle cx={50.8} cy={13.2} r={3.8} />
            <Circle cx={13.2} cy={13.2} r={3.8} />
        </G>
        <G fill="#e6e6e6">
            <Circle cx={32} cy={7.6} r={5.6} />
            <Path d="M32 45.1c-8.3 0-15 4.2-15 9.4h30c0-5.2-6.7-9.4-15-9.4" />
        </G>
        <Path fill={Colors.GREY} d="M15.1 54.5h33.8v3.8H15.1z" />
        <Path fill={Colors.DARK_CYAN} d="M11.4 58.2h41.2V62H11.4z" />
    </Svg>
);
