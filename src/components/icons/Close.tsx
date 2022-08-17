import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../utils';

interface Props {
    size?: number;
    color?: string;
}

export const Close = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 138.5 138.5">
        <Path
            d="M89.434 81.95a6 6 0 0 0-8.395 8.574l47.236 46.236a5.981 5.981 0 0 0 4.197 1.712 6.001 6.001 0 0 0 4.198-10.288zM46.993 55.478a5.982 5.982 0 0 0 4.243 1.757 6 6 0 0 0 4.243-10.242L10.243 1.757a6 6 0 0 0-8.485 8.485zM136.715 1.757a6 6 0 0 0-8.485 0L1.757 128.23a6 6 0 1 0 8.486 8.485L136.715 10.243a6.001 6.001 0 0 0 0-8.486z"
            fill={props.color || Colors.WHITE}
        />
    </Svg>
);
