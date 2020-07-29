import { DefaultTheme } from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {}

    interface Theme {
      padding: number;
      margin: number;
    }
  }
}

export const theme = {
  ...DefaultTheme,
  // Specify custom property
  padding: 16,
  margin: 16,
  roundness: 50,

  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#A55EEA',
    accent: '#A5B1C2',
    text: '#7e7e7e',
    disabled: '#A5B1C2',
  },
};
