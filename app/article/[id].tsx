import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { BrandColors, BrandFonts } from '@/constants/theme';
import type { PartialArticle } from '@/types/article';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.white,
  },
  heroImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  content: {
    padding: 24,
    gap: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: BrandColors.azure,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  badgeText: {
    color: BrandColors.white,
    fontFamily: BrandFonts.body,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
  title: {
    fontFamily: BrandFonts.heading,
    fontSize: 32,
    color: BrandColors.burgundy,
    lineHeight: 40,
  },
  date: {
    fontFamily: BrandFonts.body,
    fontSize: 14,
    color: BrandColors.grayLight,
  },
  introduction: {
    fontFamily: BrandFonts.body,
    fontSize: 18,
    fontWeight: '600',
    color: BrandColors.gray,
    lineHeight: 28,
  },
  bodyCopy: {
    fontFamily: BrandFonts.body,
    fontSize: 16,
    color: BrandColors.gray,
    lineHeight: 26,
  },
});

const mockArticles: Record<string, PartialArticle> = {
  'article-1': {
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
      body_copy: {
        value:
          'Preventive care encompasses a wide range of healthcare services designed to prevent illnesses, detect health issues early, and maintain overall wellness. Unlike reactive healthcare that addresses problems after they occur, preventive care takes a proactive approach to health management.\n\nRegular check-ups and screenings form the cornerstone of preventive care. These visits allow healthcare providers to monitor your health over time, identify risk factors, and catch potential problems before they become serious. Common screenings include blood pressure checks, cholesterol tests, cancer screenings, and diabetes tests.\n\nVaccinations are another critical component of preventive care. They protect against infectious diseases and have been instrumental in reducing or eliminating many serious illnesses. Staying up-to-date with recommended vaccines helps protect not only your health but also the health of your community.\n\nLifestyle choices play a significant role in preventive care as well. Maintaining a healthy diet, exercising regularly, getting adequate sleep, managing stress, and avoiding harmful habits like smoking all contribute to better health outcomes. These choices can reduce your risk of chronic diseases such as heart disease, diabetes, and certain cancers.\n\nWorking with your healthcare provider to develop a personalized preventive care plan is essential. This plan should take into account your age, gender, family history, and individual risk factors to determine which screenings, vaccinations, and lifestyle modifications are most important for you.',
      },
    },
  },
  'article-2': {
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
      body_copy: {
        value:
          'The relationship between nutrition and mental health has become an increasingly important area of research in recent years. Scientists are discovering that the foods we eat can have profound effects on our brain function, mood, and overall psychological well-being.\n\nThe gut-brain connection plays a central role in this relationship. Our digestive system contains millions of neurons and produces many of the same neurotransmitters found in the brain, including serotonin. In fact, approximately 95% of serotonin is produced in the gut. This means that what we eat directly influences the chemical messengers that regulate our mood.\n\nCertain nutrients are particularly important for mental health. Omega-3 fatty acids, found in fatty fish, walnuts, and flaxseeds, have been shown to support brain function and may help reduce symptoms of depression and anxiety. B vitamins, especially B12 and folate, are essential for producing neurotransmitters and maintaining healthy nerve cells.\n\nThe Mediterranean diet, rich in fruits, vegetables, whole grains, lean proteins, and healthy fats, has been associated with lower rates of depression and cognitive decline. This dietary pattern provides a wide range of nutrients that support brain health while limiting processed foods and added sugars that can contribute to inflammation.\n\nMaking gradual changes to improve your diet can have lasting benefits for both physical and mental health. Start by incorporating more whole foods, reducing processed food consumption, and staying hydrated. Working with a healthcare provider or registered dietitian can help you develop an eating plan that supports your mental well-being.',
      },
    },
  },
} as unknown as Record<string, PartialArticle>;

const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function ArticleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = mockArticles[id ?? ''];

  if (!article?.elements) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Article not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { title, introduction, image, publish_date, body_copy } = article.elements;
  const imageUrl = image?.value?.[0]?.url;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView>
        {imageUrl && (
          <Image source={{ uri: imageUrl }} style={styles.heroImage} contentFit="cover" />
        )}
        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>ARTICLE</Text>
          </View>
          {title?.value && <Text style={styles.title}>{title.value}</Text>}
          {publish_date?.value && (
            <Text style={styles.date}>{formatDate(publish_date.value)}</Text>
          )}
          {introduction?.value && (
            <Text style={styles.introduction}>{introduction.value}</Text>
          )}
          {body_copy?.value && <Text style={styles.bodyCopy}>{body_copy.value}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
