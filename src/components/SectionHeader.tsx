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
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <Text style={textStyles.header}>{title}</Text>
      <SeeAll onPress={onSeeAllPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 12,
    marginBottom: 4,
  }
});

export default SectionHeader;