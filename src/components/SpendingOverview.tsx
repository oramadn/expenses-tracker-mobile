import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '@/src/styles/theme';
import { textStyles } from '@/src/styles/text_styles';
import Card from './Card';
import Button from './buttons/Button';
import SectionHeader from './SectionHeader';

interface Transaction {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  amount: string;
  percentage: string;
  time: string;
}

interface SpendingOverviewProps {
  onSeeAllPress: () => void;
  transactions: Transaction[];
}

const SpendingOverview: React.FC<SpendingOverviewProps> = ({ onSeeAllPress, transactions }) => {
  const textStyle = textStyles();

  const [selectedButton, setSelectedButton] = useState<'recent' | 'upcoming'>('recent');

  const handleButtonClick = (button: 'recent' | 'upcoming') => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <SectionHeader title="Spending Overview" onSeeAllPress={onSeeAllPress} />
      <View style={styles.cardWrapper}>
        <Card
          width="100%"
          height={260}
          backgroundColor={theme.colors.secondary}
          paddingVertical={10}
          paddingHorizontal={10}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Card
              height={50}
              borderRadius={30}
              shadowOpacity={0}
              shadowColor="#FFFFFF"
              backgroundColor={theme.colors.background}
            >
              <View style={styles.buttonWrapper}>
                <Button
                  style={{
                    touchable: {
                      height: 40,
                      width: 120,
                      borderRadius: 30,
                      marginRight: 10,
                      backgroundColor: selectedButton === 'recent' ? theme.colors.secondary : theme.colors.background,
                    }
                  }}
                  title="Recent"
                  textVariant="boldBody"
                  onPress={() => handleButtonClick('recent')}
                />
                <Button
                  style={{
                    touchable: {
                      height: 40,
                      width: 120,
                      borderRadius: 30,
                      backgroundColor: selectedButton === 'upcoming' ? theme.colors.secondary : theme.colors.background,
                    }
                  }}
                  title="Upcoming"
                  textVariant="boldBody"
                  onPress={() => handleButtonClick('upcoming')}
                />
              </View>
            </Card>

            <View style={styles.transactionWrapper}>
              <Card
                height={180}
                backgroundColor={theme.colors.background}
                paddingHorizontal={16}
                paddingVertical={16}
              >
                <ScrollView
                  style={styles.scrollView}
                  contentContainerStyle={styles.scrollViewContent}
                  showsVerticalScrollIndicator={true}
                  nestedScrollEnabled={true}
                >
                  <View style={styles.transactionContainer}>
                    {transactions.map((transaction) => (
                      <View key={transaction.id} style={styles.transactionItem}>
                        <MaterialCommunityIcons
                          name={transaction.icon}
                          size={40}
                          style={{ marginRight: 8 }}
                        />
                        <View style={styles.transactionTextContainer}>
                          <Text style={textStyle.boldBody}>{transaction.title}</Text>
                          <Text style={textStyle.body}>{transaction.time}</Text>
                        </View>
                        <View style={styles.transactionAmountContainer}>
                          <Text style={textStyle.boldBody}>{transaction.amount}</Text>
                          <Text style={textStyle.body}>{transaction.percentage}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </Card>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  transactionWrapper: {
    marginTop: 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  transactionContainer: {
    paddingBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
});

export default SpendingOverview;