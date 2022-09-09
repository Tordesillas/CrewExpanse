import React, {useCallback} from 'react';
import {Pressable as RNPressable} from 'react-native';

function Pressable({children, style, ...otherProps}: any) {
    const _style = useCallback(
        ({pressed}: {pressed: boolean}) => [{opacity: pressed ? 0.5 : 1}, style && style],
        [style]
    );

    return (
        <RNPressable style={_style} {...otherProps}>
            {children}
        </RNPressable>
    );
}

export default Pressable;