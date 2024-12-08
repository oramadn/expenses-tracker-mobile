import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from './Card';
import { theme } from '../styles/theme';
import SectionHeader from './SectionHeader';
import ProgressBar from './ProgressBar';
import { textStyles } from '../styles/text_styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Goal {
  id: string;
  title: string;
}

interface GoalsProps {
  goals: Goal[];
  onSeeAllPress: () => void;
}

const Goals: React.FC<GoalsProps> = ({ goals, onSeeAllPress }) => {
  const textStyle = textStyles();

  return (
    <View>
      <SectionHeader title={"My Goals"} onSeeAllPress={onSeeAllPress} />

      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 10, marginRight: 12 }}
      >
        <View style={styles.goalsContainer}>
          {goals.map((goal, index) => (
            <Card
              key={goal.id}
              width={143}
              height={96}
              backgroundColor={theme.colors.background.default}
              marginLeft={index > 0 ? 24 : 0}
              paddingHorizontal={10}
              paddingVertical={10}
            >
              <View style={styles.goalCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.titleContainer}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={[textStyle.boldBodySmall, styles.cardTitle]}
                    >
                      {goal.title}
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={20}
                    style={styles.menuIcon}
                    onPress={() => console.log(`Navigate to Goal ${index} More`)}
                  />
                </View>

                <View style={styles.cardBottom}>
                  <View style={styles.moneyContainer}>
                    <Text style={[textStyle.body, { fontSize: 10 }]}>JOD </Text>
                    <Text style={[textStyle.body, { fontSize: 10 }]}>5000/</Text>
                    <Text style={[textStyle.body, { fontSize: 10, opacity: 0.5 }]}>10000</Text>
                  </View>
                  <ProgressBar progress={0.5} />
                </View>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 5,
  },
  goalsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 14
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    flexWrap: 'wrap',
    maxHeight: 48,
  },
  menuIcon: {
    opacity: 0.8,
  },
  goalCard: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  cardBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  moneyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 1,
  }
});

export default Goals;
