import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { textStyles } from '@/src/styles/text_styles';
import { theme } from '@/src/styles/theme';

type BudgetCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  backgroundColor: string;
};

const BudgetCard: React.FC<BudgetCardProps> = ({ icon, title, value, backgroundColor }) => (
  <Card width="46%" height={70} backgroundColor={backgroundColor} paddingHorizontal={10} paddingVertical={10}>
    <View style={styles.iconContainer}>
      {icon}
      <Text style={[textStyles().bodySmall, { marginTop: 4 }]}>{title}</Text>
    </View>
    <View>
      <Text style={textStyles().boldBody}>{value}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BudgetCard;