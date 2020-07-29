import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { Button } from 'react-native-paper';

type ActionButtonProps = {
  title: string;
  desc: string;
  onPress: () => void;
};

const AuthButton = ({ title, desc, onPress }: ActionButtonProps) => {
  const theme = useTheme();
  const { colors } = theme;

  const styles = StyleSheet.create({
    buttonContainer: {
      margin: theme.margin,
      paddingHorizontal: 60,
    },
    text: {
      color: colors.text,
      textAlign: 'center',
    },
  });
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>{desc}</Text>
      <Button
        mode="contained"
        dark
        contentStyle={{ paddingVertical: theme.padding - 6 }}
        onPress={onPress}>
        {title}
      </Button>
    </View>
  );
};

export default AuthButton;
