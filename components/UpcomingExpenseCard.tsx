import { View, Text } from 'react-native';
import { getCategoryIcon, Category } from '../constants/categoryIcons';
import { colors } from '@/theme/colors';
import { Feather } from '@expo/vector-icons';

interface UpcomingExpenseCardProps {
  expenseName: string;
  expenseAmount: string;
  expenseDate: string;
  category: Category;
}

const UpcomingExpenseCard: React.FC<UpcomingExpenseCardProps> = ({ expenseName, expenseAmount, expenseDate, category }) => {
  const Icon = getCategoryIcon(category);

  return (
    <View className="flex-col w-[150px] h-[150px] bg-secondary mt-2 mr-2 justify-center items-center rounded-xl relative">
      <Feather
        name="more-horizontal"
        size={26}
        color="white"
        style={{
          position: 'absolute',
          top: 4,
          right: 8,
          flex: 1,
        }}
      />

      <View
        style={{
          borderWidth: 2,
          borderColor: '#FFFFFF',
          borderRadius: 30,
          padding: 10,
          backgroundColor: colors.secondary,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        {Icon}
      </View>

      <View className="mt-2 items-center">
        <Text className="text-white text-xs font-bold">{expenseName}</Text>
        <Text className="text-gray-400 text-xs">{expenseDate}</Text>
      </View>

      <Text className="text-white font-bold text-base mt-3">
        JOD {expenseAmount}
        <Text className="text-sm">.00</Text>
      </Text>
    </View>
  );
};

export default UpcomingExpenseCard;