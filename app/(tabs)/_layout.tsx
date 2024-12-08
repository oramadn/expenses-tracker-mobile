import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { theme } from '@/src/styles/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarItemStyle: {
          transform: [{ translateY: 12 }],
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#999',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />

      <Tabs.Screen
        name="placeholder1"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
          tabBarLabel: 'Placdeholder1',
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                position: 'absolute',
                bottom: 35,
                left: '50%',
                transform: [{ translateX: -35 }],
                width: 70,
                height: 70,
                borderRadius: 40,
                backgroundColor: theme.colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MaterialCommunityIcons name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="placeholder2"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
          tabBarLabel: 'Placdeholder2',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
}