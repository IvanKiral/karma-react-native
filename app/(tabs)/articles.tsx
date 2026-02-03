import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BrandColors, BrandFonts } from '@/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: BrandFonts.heading,
    fontSize: 18,
    color: BrandColors.grayLight,
  },
});

export default function ArticlesListing() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Articles coming soon</Text>
    </SafeAreaView>
  );
}
