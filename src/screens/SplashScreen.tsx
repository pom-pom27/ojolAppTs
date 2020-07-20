/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { AuthParamList } from 'routes/AuthParamList';
import { StackNavigationProp } from '@react-navigation/stack';

export default function SplashScreen({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, 'Splash'>;
}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
}
