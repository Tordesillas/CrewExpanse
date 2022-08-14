import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import DifficultyChoice from '../pages/DifficultyChoice';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
