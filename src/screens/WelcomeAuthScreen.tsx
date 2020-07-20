import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from '../components/Molecules/ActionButton';
import { colors } from '../assets/colors';

const WelcomeAuthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.illustration} />
      <Text style={styles.welcomeText}>Selamat Datang di O-JOL</Text>
      <ActionButton
        title={'Masuk'}
        desc={'Silahkan Masuk, Jika anda memilik akun'}
      />
      <ActionButton
        title={'Registrasi'}
        desc={'atau, Silahkan daftar jika belum mempunyai account'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  illustration: {
    width: 200,
    backgroundColor: colors.default,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 80,
  },
});

export default WelcomeAuthScreen;
