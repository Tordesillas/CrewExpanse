import React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {Colors} from '../../utils';

interface Props {
    size?: number;
    color?: string;
}

export const Dices = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 250 250">
        <G fill={props.color || Colors.WHITE}>
            <Path d="M245.491 85.341a5 5 0 0 0-5 5v3a5 5 0 1 0 10 0v-3a5 5 0 0 0-5-5z" />
            <Path d="M225.571.001h-103.49c-13.741 0-24.92 11.179-24.92 24.92v72.243H24.917C11.178 97.164 0 108.342 0 122.082v16.259a5 5 0 1 0 10 0v-16.259c0-8.226 6.692-14.918 14.917-14.918h103.491c8.225 0 14.917 6.692 14.917 14.918v103.491c0 8.226-6.692 14.917-14.917 14.917H24.917c-8.226 0-14.917-6.691-14.917-14.917v-64.232a5 5 0 1 0-10 0v64.232c0 13.739 11.178 24.917 24.917 24.917h103.491c13.74 0 24.917-11.178 24.917-24.917v-72.242h72.245c13.741 0 24.92-11.18 24.92-24.921v-19.736a5 5 0 1 0-10 0v19.736c0 8.228-6.693 14.921-14.92 14.921h-72.245v-21.249c0-13.74-11.178-24.918-24.917-24.918H107.16V24.921c0-8.227 6.693-14.92 14.92-14.92h103.49c8.227 0 14.92 6.693 14.92 14.92v49.753a5 5 0 1 0 10 0V24.921c.001-13.742-11.179-24.92-24.919-24.92z" />
            <Circle cx={41.496} cy={136.527} r={9.749} />
            <Circle cx={41.496} cy={173.577} r={9.749} />
            <Circle cx={41.496} cy={210.627} r={9.749} />
            <Circle cx={111.996} cy={136.527} r={9.749} />
            <Circle cx={111.996} cy={173.577} r={9.749} />
            <Circle cx={111.996} cy={210.627} r={9.749} />
            <Circle cx={173.826} cy={76.665} r={9.749} />
        </G>
    </Svg>
);
