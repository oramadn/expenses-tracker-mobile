import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeHeader() {
  return (
    <View className="flex-row justify-between items-center max-h-20">
      <View className="flex-row items-center">
        <View className="border-2 border-primary rounded-full w-20 h-20"></View>
        <View className="ml-3">
          <Text className="text-md text-white">Spend wisely,</Text>
          <Text className="font-bold text-lg text-white">Omar</Text>
        </View>
      </View>
      <Ionicons name="menu" size={38} color="#29C5D6" />
    </View>
  );
}