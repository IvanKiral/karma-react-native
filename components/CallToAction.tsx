import { BrandColors, BrandFonts } from '@/constants/theme';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type CallToActionProps = {
  readonly title: string;
  readonly description: string;
  readonly buttonText: string;
  readonly buttonUrl: string;
  readonly imageUrl?: string;
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  content: {
    gap: 12,
  },
  title: {
    fontFamily: BrandFonts.heading,
    fontSize: 24,
    color: BrandColors.burgundy,
  },
  description: {
    fontFamily: BrandFonts.body,
    fontSize: 16,
    color: BrandColors.gray,
    lineHeight: 24,
  },
  button: {
    backgroundColor: BrandColors.burgundy,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontFamily: BrandFonts.body,
    fontSize: 16,
    color: BrandColors.white,
    fontWeight: '600',
  },
});

export const CallToAction = ({
  title,
  description,
  buttonText,
  buttonUrl,
  imageUrl,
}: CallToActionProps) => (
  <View style={styles.container}>
    {imageUrl && (
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel={title}
      />
    )}
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {buttonUrl && (
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      )}
    </View>
  </View>
);
