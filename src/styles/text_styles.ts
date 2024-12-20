import { useWindowDimensions } from 'react-native';
import { theme } from './theme';

const useResponsiveFontSize = (baseFontSize: number) => {
  const { width } = useWindowDimensions();
  const scale = width / 375;
  return baseFontSize * scale;
};

export const textStyles = (
  customFontSize?: number
) => {
  const defaultFontSize = {
    header: 22,
    subHeader: 18,
    body: 16,
    boldBody: 16,
    headerLarge: 24,
    headerSmall: 20,
    bodySmall: 14,
  };

  return {
    header: {
      fontFamily: 'InriaSans-Bold',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.header),
      lineHeight: 30,
      color: theme.colors.text.primary,
    },
    subHeader: {
      fontFamily: 'InriaSans-Regular',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.subHeader),
      lineHeight: 26,
      color: theme.colors.text.secondary,
    },
    body: {
      fontFamily: 'InriaSans-Regular',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.body),
      lineHeight: 24,
      color: theme.colors.text.primary,
    },
    boldBody: {
      fontFamily: 'InriaSans-Bold',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.boldBody),
      lineHeight: 24,
      color: theme.colors.text.primary,
    },
    headerLarge: {
      fontFamily: 'InriaSans-Bold',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.headerLarge),
      lineHeight: 34,
      color: theme.colors.text.primary,
    },
    headerSmall: {
      fontFamily: 'InriaSans-Bold',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.headerSmall),
      lineHeight: 28,
      color: theme.colors.text.primary,
    },
    bodySmall: {
      fontFamily: 'InriaSans-Regular',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.bodySmall),
      lineHeight: 20,
      color: theme.colors.text.primary,
    },
    boldBodySmall: {
      fontFamily: 'InriaSans-Bold',
      fontSize: customFontSize ? customFontSize : useResponsiveFontSize(defaultFontSize.bodySmall),
      lineHeight: 20,
      color: theme.colors.text.primary,
    },
  };
};