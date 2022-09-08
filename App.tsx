import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './src/routes/appNavigator';
import {Colors} from './src/utils';

export default class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={Colors.BLACK} barStyle='light-content'/>
                {AppNavigator()}
            </>
        );
    }
}
