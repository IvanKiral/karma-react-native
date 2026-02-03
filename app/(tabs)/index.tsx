import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo, FeaturedArticle, HeroImage, Callout, Divider, OurTeam } from '@/components';
import { BrandColors, BrandFonts } from '@/constants/theme';
import type { PartialArticle } from '@/types/article';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.white,
  },
  scrollContent: {
    padding: 24,
    gap: 32,
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

const mockArticle = {
  system: {
    id: 'mock-article-1',
    name: 'Sample Article',
    codename: 'sample_article',
    type: 'article',
    collection: 'default',
    workflowStep: 'published',
    workflow: 'default',
    language: 'en',
    lastModified: '2024-01-15T00:00:00Z',
    sitemapLocations: [],
  },
  elements: {
    title: {
      value: 'Discovering the Art of Wine Tasting',
    },
    introduction: {
      value:
        'Embark on a sensory journey through the world of fine wines. Learn the techniques used by sommeliers to evaluate color, aroma, and taste profiles that make each vintage unique.',
    },
    publish_date: {
      value: '2024-01-15T00:00:00Z',
    },
    image: {
      value: [
        {
          url: 'https://picsum.photos/800/400',
        },
      ],
    },
  },
} as unknown as PartialArticle;

const handleReadMore = () => {
  console.log('Read more pressed');
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerSection}>
          <Logo />
          <HeroImage
            headline="Improving Healthcare Together"
            subheadline="Building modern solutions for better patient outcomes"
            imageUrl="https://picsum.photos/670/440"
          />
        </View>
        <Divider />
        <OurTeam
          title="Our Team"
          body="Behind every breakthrough at Karma Health is a passionate team of clinicians, researchers, educators, and innovators. With deep expertise and a shared commitment to advancing healthcare, our people work across disciplines to deliver exceptional care and drive meaningful discovery."
          imageUrl="https://picsum.photos/670/440"
        />
        <Divider />
        <Callout
          title="We're Always Evolving."
          body="Please note that Karma Health's research and medical education programs are continually evolving to provide cutting-edge advancements in healthcare. While we strive for excellence, outcomes may vary based on individual circumstances."
        />
        <Divider />
        <Text style={styles.sectionSubtitle}>Featured</Text>
        <FeaturedArticle article={mockArticle} onReadMore={handleReadMore} />
      </ScrollView>
    </SafeAreaView>
  );
}
