import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { colors } from '@/theme/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          height: 56,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 6,
        },
        tabBarActiveTintColor: 'cyan',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={32} name="home" color={colors.primary} />
          ),
        }}
      />
    </Tabs>
  );
}