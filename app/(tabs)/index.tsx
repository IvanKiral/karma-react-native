import { Divider, FeaturedArticle, HeroImage, Loader, Logo, RichText } from '@/components';
import { BrandColors, BrandFonts } from '@/constants/theme';
import { useLandingPage } from '@/hooks/use-landing-page';
import { isArticleType, type ArticleType } from '@/model';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.white,
  },
  scrollContent: {
    padding: 24,
    gap: 32,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BrandColors.white,
  },
  sectionSubtitle: {
    fontFamily: BrandFonts.body,
    fontSize: 22,
    color: BrandColors.burgundy,
    textAlign: 'left',
  },
  headerSection: {
    gap: 16,
  },
});

export default function HomeScreen() {
  const router = useRouter();
  const { data: landingPage, isLoading } = useLandingPage();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer} edges={['top']}>
        <Loader />
      </SafeAreaView>
    );
  }

  const heroImageUrl = landingPage?.elements.hero_image.value[0]?.url;
  const featuredContent = landingPage?.elements.featured_content.linkedItems ?? [];
  const firstArticle = featuredContent.find(isArticleType);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerSection}>
          <Logo />
          {landingPage && heroImageUrl && (
            <HeroImage
              headline={landingPage.elements.headline.value}
              subheadline={landingPage.elements.subheadline.value}
              imageUrl={heroImageUrl}
            />
          )}
        </View>

        {landingPage?.elements.body_copy.value && (
          <>
            <Divider />
            <RichText
              value={landingPage.elements.body_copy.value}
              linkedItems={landingPage.elements.body_copy.linkedItems}
            />
          </>
        )}

        {firstArticle && (
          <>
            <Divider />
            <Text style={styles.sectionSubtitle}>Featured</Text>
            <FeaturedArticle
              article={firstArticle}
              onReadMore={() => router.push(`/article/${firstArticle.system.id}`)}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
