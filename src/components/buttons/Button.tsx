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

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  textVariant?: keyof typeof textStyles;
  textSize?: number;
  textWeight?: TextStyle['fontWeight'];
  bold?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  width = 200,
  height = 50,
  backgroundColor = theme.colors.secondary,
  textColor,
  borderRadius = 8,
  containerStyle = {},
  textStyle = {},
  textVariant = 'body',
  textSize,
  textWeight,
  bold = false,
  ...touchableProps
}) => {
  const themeTextStyle = textStyles[textVariant];

  const dynamicTextStyle: TextStyle = {
    ...(textSize ? { fontSize: textSize } : {}),
    ...(bold ? { fontWeight: 'bold' } : { fontWeight: themeTextStyle.fontWeight }),
    ...(textWeight ? { fontWeight: textWeight } : {})
  };

  return (
    <TouchableOpacity
      {...touchableProps}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor,
          borderRadius
        },
        containerStyle
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          themeTextStyle,
          dynamicTextStyle,
          { color: textColor || themeTextStyle.color },
          textStyle
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 12,
  }
});

export default Button;