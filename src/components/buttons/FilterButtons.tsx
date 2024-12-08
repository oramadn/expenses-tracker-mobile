import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const FilterButtons: React.FC = () => {
  const buttonConfigs = [
    {
      title: "All",
      textVariant: 'header',
      style: {
        touchable: {
          width: 80,
          height: 40,
          borderRadius: 20
        }
      },
      variant: {
        size: 18
      },
      onPress: () => console.log('All pressed')
    },
    {
      title: "Today",
      textVariant: 'header',
      style: {
        touchable: {
          width: 80,
          height: 40,
          borderRadius: 20
        }
      },
      variant: {
        size: 18
      },
      onPress: () => console.log('Button 2 pressed')
    },
    {
      title: "Week",
      textVariant: 'header',
      style: {
        touchable: {
          width: 80,
          height: 40,
          borderRadius: 20
        }
      },
      variant: {
        size: 18
      },
      onPress: () => console.log('Button 3 pressed')
    },
    {
      title: "Month",
      textVariant: 'header',
      style: {
        touchable: {
          width: 80,
          height: 40,
          borderRadius: 20
        }
      },
      variant: {
        size: 18
      },
      onPress: () => console.log('Button 4 pressed')
    },
    {
      title: "Year",
      textVariant: 'header',
      style: {
        touchable: {
          width: 80,
          height: 40,
          borderRadius: 20
        }
      },
      variant: {
        size: 18
      },
      onPress: () => console.log('Button 5 pressed')
    }
  ];

  return (
    <View style={styles.container}>
      {buttonConfigs.map((config, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            {...config}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6
  },
});

export default FilterButtons;