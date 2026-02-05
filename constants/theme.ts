import { Platform } from 'react-native';

export const BrandColors = {
  burgundy: '#993265',
  azure: '#009edb',
  white: '#ffffff',
  grayLight: '#8e8e8e',
  gray: '#3b3b3b',
  creme: '#fff7e7',
} as const;

export const BrandFonts = {
  heading: Platform.select({ ios: 'Georgia', default: 'serif' }),
  body: Platform.select({ ios: 'System', default: 'sans-serif' }),
} as const;
