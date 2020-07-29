import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AuthButton from '../components/Molecules/AuthButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from 'routes/AuthParamList';
import { strings } from 'assets/strings';
import { useTheme } from 'react-native-paper';

type WelcomeAuthScreenProps = {
  navigation: StackNavigationProp<AuthParamList, 'WelcomeAuth'>;
};

const WelcomeAuthScreen = ({ navigation }: WelcomeAuthScreenProps) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    illustration: {
      width: 300,
      height: 200,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    welcomeText: {
      fontWeight: 'bold',
      color: colors.text,
      fontSize: 20,
      marginTop: 10,
      marginBottom: 80,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.illustration}>
        <Image
          style={styles.illustration}
          resizeMode="cover"
          source={require('../assets/images/motor.jpg')}
        />
      </View>
      <Text style={styles.welcomeText}>Selamat Datang di O-JOL</Text>
      <AuthButton
        title={strings.Auth.loginButtonText}
        desc={strings.Auth.descriptionLogin}
        onPress={() => navigation.navigate('Login')}
      />

      <AuthButton
        title={strings.Auth.registerButtonText}
        desc={strings.Auth.descriptionRegister}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default WelcomeAuthScreen;
