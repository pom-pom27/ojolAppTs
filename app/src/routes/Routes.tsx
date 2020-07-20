//define routes here for react-navigation
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamList} from './AuthParamList';
import WelcomeAuthScreen from '../screens/WelcomeAuthScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator<AuthParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeAuth"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeAuth" component={WelcomeAuthScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
