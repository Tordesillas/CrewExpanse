import React from 'react';
import Svg, {Path, Text} from 'react-native-svg';
import {Colors, Fonts} from '../../utils';

interface Props {
    number?: number
    height?: number;
}

export const Card = (props: Props) => (
    <Svg width={!!props.height ? props.height * 66/95 : 38} height={props.height || 55} viewBox="0 0 132 190">
        <Path
            fill="#fff"
            d="M19.52 0h91.99c4.33 1.02 8.42 3.04 11.77 5.98 1.2 1.21 2.34 2.48 3.37 3.83 1.13 1.75 2.08 3.6 2.95 5.49 1.24 3.42 1.5 7.09 1.43 10.7-.09 46.69.03 93.39-.04 140.08.09 11.66-9.52 22.19-21.09 23.41-28.3-.27-56.6-.01-84.91-.09-6.43.05-12.71-2.58-17.24-7.13-3.05-3.63-5.59-7.87-6.28-12.63-.56-4.19-.28-8.44-.31-12.65.03-41.34-.02-82.68 0-124.01.03-5.59-.41-11.3 1.1-16.75 2.59-8 9.48-13.6 17.26-16.23m.84 8.47C13.74 10.42 9 17.04 9.2 23.92c0 47.4-.04 94.79.02 142.19.01 8.27 7.38 15.56 15.65 15.46 27.66.01 55.33.06 82.99-.02 8.07-.17 15.11-7.38 15.11-15.45.07-47.37.02-94.74.03-142.12.35-8.27-6.68-15.96-14.98-16.18-26.34-.14-52.68.01-79.02-.07-2.89.01-5.85-.13-8.64.74Z"
        />
        <Path
            fill="#17428b"
            d="M20.36 8.47c2.79-.87 5.75-.73 8.64-.74 26.34.08 52.68-.07 79.02.07 8.3.22 15.33 7.91 14.98 16.18-.01 47.38.04 94.75-.03 142.12 0 8.07-7.04 15.28-15.11 15.45-27.66.08-55.33.03-82.99.02-8.27.1-15.64-7.19-15.65-15.46-.06-47.4-.02-94.79-.02-142.19-.2-6.88 4.54-13.5 11.16-15.45Z"
        />
        <Text
            fill={Colors.WHITE}
            fontSize="80"
            fontFamily={Fonts.Andika.Regular}
            fontWeight="bold"
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
        >{props.number}</Text>
    </Svg>
);
