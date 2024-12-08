export const theme = {
  colors: {
    primary: {
      base: '#247DE5',
      light: '#68A8F8',
      dark: '#174DA2',
    },
    secondary: {
      base: '#BFE5F2',
      light: '#E3F5FC',
      dark: '#7FBBCB',
    },
    success: {
      base: '#AFE894',
      light: '#D6F8BE',
      dark: '#78B569',
    },
    error: {
      base: '#E63946',
      light: '#F8C7CC',
      dark: '#A02731',
    },
    warning: {
      base: '#F4A261',
      light: '#FCD2A8',
      dark: '#BF7447',
    },
    neutral: {
      black: '#000000',
      white: '#FFFFFF',
      light: '#F6F6F6',
      dark: '#4A4A4A',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.57)',
      inverse: '#FFFFFF',
      muted: '#6E6E6E',
    },
    background: {
      default: '#FFFFFF',
      muted: '#F6F6F6',
      inverted: '#000000',
    },
    border: {
      default: '#E0E0E0',
      focus: '#247DE5',
    },
  },
  spacing: (value: number) => value * 8,
};