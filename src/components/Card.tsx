import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  borderRadius?: number;
  shadowColor?: string;
  shadowOffset?: { width: number, height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  justifyContent?: number;
  marginLeft?: number;
  style?: ViewStyle;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  width = '100%',
  height = 'auto',
  backgroundColor = '#fff',
  borderRadius = 20,
  shadowColor = '#000',
  shadowOffset = { width: 0, height: 2 },
  shadowOpacity = 0.1,
  shadowRadius = 6,
  elevation = 5,
  paddingHorizontal = 0,
  paddingVertical=0,
  justifyContent= 'space-between',
  marginLeft=0,
  style,
  children,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          shadowColor: shadowColor,
          shadowOffset: shadowOffset,
          shadowOpacity: shadowOpacity,
          shadowRadius: shadowRadius,
          elevation: elevation,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          justifyContent: justifyContent,
          marginLeft: marginLeft,
        } as ViewStyle,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
});

export default Card;