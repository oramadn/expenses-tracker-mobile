import { View, Text } from "react-native";
import { getCategoryIcon, Category } from '../constants/categoryIcons';
import { colors } from "@/theme/colors";

interface RecentTransactionCard {
  expenseName: string;
  expenseAmount: string;
  expenseDate: string;
  category: Category;
}

const RecentTransactionCard: React.FC<RecentTransactionCard> = ({ expenseName, expenseAmount, expenseDate, category }) => {
  const Icon = getCategoryIcon(category);

  return (
    <View className="flex-row justify-start items-center">
      <View style={{
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 30,
        padding: 10,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {Icon}
      </View>
      <View className="flex-1 ml-3">
        <Text className="text-text font-bold">{expenseName}</Text>
        <Text className="text-gray-400">{expenseDate}</Text>
      </View>

      <View>
        <Text className="text-text text-base">-JOD {expenseAmount}</Text>
      </View>
    </View>
  );
};

export default RecentTransactionCard;