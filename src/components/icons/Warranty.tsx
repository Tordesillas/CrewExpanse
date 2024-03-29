import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../utils';

interface Props {
    size?: number;
    color?: string;
}

export const Warranty = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 32 32">
        <Path
            d="M123 390.139c0-.198-.131-.384-.358-.511a1.375 1.375 0 0 0-.817-.145c-2.73.256-5.925-.246-8.658-1.533-.695-.339-1.638-.338-2.332.003-2.729 1.296-5.919 1.817-8.651 1.551a1.376 1.376 0 0 0-.812.139c-.226.125-.357.311-.357.506-.015 2.275-.015 8.668-.015 10.992 0 .523.458.998 1.172 1.214l9 2.728c.526.159 1.13.159 1.656 0l9-2.728c.714-.216 1.172-.691 1.172-1.214v-11.002Z"
            fill={props.color || Colors.CYAN}
            transform="matrix(1 0 0 1.5 -96 -579)"
        />
        <Path
            d="M124 406.712v-16.504a1.998 1.998 0 0 0-2.329-1.972c-2.5.348-5.421-.358-7.924-2.127a2.972 2.972 0 0 0-3.494.007c-2.491 1.773-5.394 2.51-7.889 2.156a1.987 1.987 0 0 0-2.349 1.952c-.015 3.408-.015 13.001-.015 16.488a3 3 0 0 0 1.759 2.731l9 4.091a2.995 2.995 0 0 0 2.482 0l9-4.091a3 3 0 0 0 1.759-2.731Zm-2.001-16.504.001.001v16.503c0 .392-.229.748-.586.911l-9 4.09a.997.997 0 0 1-.828 0l-9-4.09a1.002 1.002 0 0 1-.586-.911c0-3.481 0-13.048.015-16.47l.003.001c2.98.435 6.441-.394 9.398-2.5l.006-.004a.975.975 0 0 1 1.156-.007l.006.004c2.963 2.095 6.425 2.894 9.38 2.478l.035-.006Zm-14.706 9.499 3.147 3.147a1 1 0 0 0 1.414 0l5.894-5.894a1 1 0 0 0-1.414-1.414l-5.187 5.186-2.44-2.439a1 1 0 0 0-1.414 1.414ZM122 390.209Z"
            fill={props.color || Colors.DARK_CYAN}
            transform="translate(-96 -384)"
        />
    </Svg>
);