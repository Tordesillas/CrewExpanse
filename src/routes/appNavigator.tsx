import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import DifficultyChoice from '../pages/DifficultyChoice';
import PlayableInterface from '../pages/PlayableInterface';
import EndScreen from '../pages/EndScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='Settings'
                    component={Settings}
                />
                <Stack.Screen
                    name='DifficultyChoice'
                    component={DifficultyChoice}
                />
                <Stack.Screen
                    name='PlayableInterface'
                    component={PlayableInterface}
                />
                <Stack.Screen
                    name='EndScreen'
                    component={EndScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
