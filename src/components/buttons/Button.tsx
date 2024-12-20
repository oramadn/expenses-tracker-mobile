import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import { theme } from '../../styles/theme';
import { textStyles } from '@/src/styles/text_styles';

type TextVariant = keyof ReturnType<typeof textStyles>;

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  variant?: {
    size?: number;
    color?: string;
    weight?: TextStyle['fontWeight'];
    textStyle?: TextStyle;
  };
  style?: {
    container?: ViewStyle;
    touchable?: ViewStyle;
  };
  textVariant?: TextVariant;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = {},
  style = {},
  textVariant = 'body',
  ...touchableProps
}) => {
  const {
    size: textSize,
    color: textColor,
    weight: textWeight,
    textStyle: customTextStyle
  } = variant;

  const baseTextStyle = textStyles()[textVariant];

  const dynamicTextStyle: TextStyle = {
    ...baseTextStyle,
    ...(textSize ? { fontSize: textSize } : {}),
    ...(textColor ? { color: textColor } : {}),
    ...(textWeight ? { fontWeight: textWeight } : {}),
    ...customTextStyle
  };

  return (
    <TouchableOpacity
      {...touchableProps}
      style={[
        styles.button,
        style.touchable,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          dynamicTextStyle,
          style.container
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 8,
    backgroundColor: theme.colors.background.default,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 8,
  }
});

export default Button;