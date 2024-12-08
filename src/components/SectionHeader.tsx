import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import SeeAll from './SeeAll';
import { textStyles } from '../styles/text_styles';

interface SectionHeaderProps {
  title: string;
  onSeeAllPress: () => void;
  containerStyle?: ViewStyle;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onSeeAllPress, containerStyle }) => {
  const textStyle = textStyles();

  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <Text style={textStyle.headerSmall}>{title}</Text>
      <SeeAll onPress={onSeeAllPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    marginTop: 6,
    marginBottom: 2,
  }
});

export default SectionHeader;