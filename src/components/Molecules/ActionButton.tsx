import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import Button from '../atoms/Button';

type ActionButtonProps = { title: string; desc: string };

const ActionButton = ({ title, desc }: ActionButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    paddingHorizontal: 60,
  },
  text: {
    color: colors.text.default,
    textAlign: 'center',
  },
});

export default ActionButton;
