import React from 'react';
import {StatusBar} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import AppNavigator from './src/routes/appNavigator';
import {Colors} from './src/utils';

export default class App extends React.Component {
    constructor(props: any) {
        super(props);

        setTimeout(() => BootSplash.hide().then());
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={Colors.BLACK} barStyle='light-content'/>
                {AppNavigator()}
            </>
        );
    }
}
