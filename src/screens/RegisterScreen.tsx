import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from 'routes/AuthParamList';
import { strings } from 'assets/strings';
import Spacer from '../components/Spacer';
import { theme } from '../assets/theme';
import { RegisterIllustration } from '../assets/images/illustrations';

type RegisterScreenProps = {
  navigation: StackNavigationProp<AuthParamList, 'Register'>;
};

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const styles = StyleSheet.create({
    container: { padding: theme.padding - 6, backgroundColor: 'white' },
    backButton: {
      width: 46,
      height: 46,
      justifyContent: 'center',
    },
    title: { marginVertical: theme.margin },
  });

  return (
    <ScrollView style={styles.container}>
      <Button
        style={styles.backButton}
        icon="chevron-back"
        mode="text"
        compact
        onPress={navigation.goBack}>
        {' '}
      </Button>

      <RegisterIllustration width={106} height={115} />
      <Title style={styles.title}>{strings.Auth.registerTitleText}</Title>
      <Spacer margin={16} />
      <Spacer margin={12}>
        <TextInput
          inlineImagePadding={10}
          placeholder="Nama"
          mode="outlined"
          value={name}
          onChangeText={setName}
        />
      </Spacer>
      <Spacer margin={12}>
        <TextInput
          mode="outlined"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer margin={12}>
        <TextInput
          placeholder="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
        />
      </Spacer>
    </ScrollView>
  );
}
