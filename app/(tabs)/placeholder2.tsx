import { View, Text, StyleSheet } from 'react-native';

export default function Placeholder2Screen() {
  return (
    <View style={styles.container}>
      <Text>Placeholder2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});