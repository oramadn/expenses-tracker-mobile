import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavigationBar = () => {
  return (
    <View style={styles.navBar}>
      {/* Icons */}
      <TouchableOpacity>
        <MaterialCommunityIcons name="home" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="settings" size={30} style={styles.icon} />
      </TouchableOpacity>
      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <MaterialCommunityIcons name="plus" size={30} color="#fff" />
      </TouchableOpacity>
      {/* More Icons */}
      <TouchableOpacity>
        <MaterialCommunityIcons name="account" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="bell" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 84,
    backgroundColor: '#fff', // Use theme color if applicable
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Equal spacing between items
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, // For Android shadow
  },
  icon: {
    color: '#333', // Placeholder color; replace with theme colors
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f00', // Example color for add button
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensures it stays centered
  },
});

export default NavigationBar;