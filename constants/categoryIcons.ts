import React from 'react';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export const categoryIcons = {
  gas: { name: 'car-outline', library: 'Ionicons' },
  groceries: { name: 'shopping-cart', library: 'Feather' },
  internet: { name: 'wifi', library: 'Feather' },
  entertainment: { name: 'tv', library: 'Feather' },
  transport: { name: 'bus-outline', library: 'Ionicons' },
  shopping: { name: 'shopping-cart', library: 'MaterialIcons' },
};

export type Category = keyof typeof categoryIcons;

export const getCategoryIcon = (category: Category) => {
  const iconData = categoryIcons[category];
  const iconName = iconData.name;
  const iconLibrary = iconData.library;

  switch (iconLibrary) {
    case 'Ionicons':
      return React.createElement(Ionicons, { name: iconName, size: 24, color: 'white' });
    case 'Feather':
      return React.createElement(Feather, { name: iconName, size: 24, color: 'white' });
    case 'MaterialIcons':
      return React.createElement(MaterialIcons, { name: iconName, size: 24, color: 'white' });
    default:
      return null;
  }
};