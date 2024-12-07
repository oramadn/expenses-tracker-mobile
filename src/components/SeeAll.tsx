import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface SeeAllProps {
  text?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const SeeAll: React.FC<SeeAllProps> = ({
  text = 'See all',
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <Entypo name="chevron-small-right" size={20} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  text: {
    fontFamily: 'InriaSans-Regular',
    fontSize: 16,
  },
  icon: {
    transform: [{ translateY: 1 }],
    marginLeft: -3,
    marginRight: -5
  },
});

export default SeeAll;