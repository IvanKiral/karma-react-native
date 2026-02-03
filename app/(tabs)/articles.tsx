import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { BrandColors } from '@/constants/theme';
import { ArticlesList } from '@/components';
import type { PartialArticle } from '@/types/article';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.white,
  },
  scrollContent: {
    padding: 24,
  },
});

const mockArticles = [
  {
    system: {
      id: 'article-1',
      name: 'Understanding Preventive Care',
      codename: 'understanding_preventive_care',
      type: 'article',
      collection: 'default',
      workflowStep: 'published',
      workflow: 'default',
      language: 'en',
      lastModified: '2024-02-10T00:00:00Z',
      sitemapLocations: [],
    },
    elements: {
      title: {
        value: 'Understanding Preventive Care',
      },
      introduction: {
        value:
          'Preventive care is the foundation of long-term health. Learn about the screenings, vaccinations, and lifestyle choices that can help you stay healthy and catch potential issues early.',
      },
      publish_date: {
        value: '2024-02-10T00:00:00Z',
      },
      image: {
        value: [
          {
            url: 'https://picsum.photos/800/401',
          },
        ],
      },
    },
  },
  {
    system: {
      id: 'article-2',
      name: 'Nutrition and Mental Health',
      codename: 'nutrition_mental_health',
      type: 'article',
      collection: 'default',
      workflowStep: 'published',
      workflow: 'default',
      language: 'en',
      lastModified: '2024-02-05T00:00:00Z',
      sitemapLocations: [],
    },
    elements: {
      title: {
        value: 'The Connection Between Nutrition and Mental Health',
      },
      introduction: {
        value:
          'Research increasingly shows that what we eat affects not just our physical health but our mental well-being too. Discover how dietary choices can impact mood, cognition, and overall mental health.',
      },
      publish_date: {
        value: '2024-02-05T00:00:00Z',
      },
      image: {
        value: [
          {
            url: 'https://picsum.photos/800/402',
          },
        ],
      },
    },
  },
] as unknown as PartialArticle[];

export default function ArticlesListing() {
  const router = useRouter();

  const handleArticlePress = (id: string) => {
    router.push(`/article/${id}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ArticlesList
          title="Articles"
          articles={mockArticles}
          onArticlePress={handleArticlePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
