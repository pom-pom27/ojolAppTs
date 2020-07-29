import React from 'react';
import { View } from 'react-native';

type SpacerProps = {
  children?: React.ReactNode;
  margin?: number;
  padding?: number;
};

const Spacer = ({ children, margin, padding }: SpacerProps) => (
  <View style={{ margin: margin, padding: padding }}>{children}</View>
);

export default Spacer;
