import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../../assets/colors';

type ButtonProps = {
  title: string;
};

export default function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.default,
    borderRadius: 50,
    paddingVertical: 20,
    marginTop: 5,
  },
});
