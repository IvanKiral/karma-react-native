import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { BrandColors, BrandFonts } from '@/constants/theme';

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  textContainer: {
    gap: 8,
  },
  textContainerWide: {
    flex: 1,
    paddingRight: 24,
  },
  headline: {
    fontFamily: BrandFonts.heading,
    fontSize: 36,
    color: BrandColors.burgundy,
    lineHeight: 44,
  },
  subheadline: {
    fontFamily: BrandFonts.body,
    fontSize: 18,
    color: BrandColors.gray,
    lineHeight: 28,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 670 / 440,
  },
  imageContainerWide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

type HeroImageProps = {
  readonly headline: string;
  readonly subheadline: string;
  readonly imageUrl: string;
};

export const HeroImage = ({ headline, subheadline, imageUrl }: HeroImageProps) => {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;

  return (
    <View style={[styles.container, isWide ? styles.row : styles.column]}>
      <View style={[styles.textContainer, isWide && styles.textContainerWide]}>
        <Text style={styles.headline}>{headline}</Text>
        <Text style={styles.subheadline}>{subheadline}</Text>
      </View>
      <View style={[styles.imageContainer, isWide && styles.imageContainerWide]}>
        <Image source={{ uri: imageUrl }} style={styles.image} contentFit="cover" />
      </View>
    </View>
  );
};
