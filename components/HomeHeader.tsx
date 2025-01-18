import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';

export default function HomeHeader() {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center">
        <Ionicons name="person-circle-outline" size={70} color={colors.primary}/>
        <View className="ml-3">
          <Text className="text-md text-white">Spend wisely,</Text>
          <Text className="font-bold text-lg text-white">Omar</Text>
        </View>
      </View>
      <Ionicons name="menu" size={38} color="#29C5D6" />
    </View>
  );
}