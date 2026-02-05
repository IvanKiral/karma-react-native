import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArticlesList, Loader } from '@/components';
import { BrandColors } from '@/constants/theme';
import { useArticles } from '@/hooks/use-articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.white,
  },
  scrollContent: {
    padding: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BrandColors.white,
  },
});

export default function ArticlesListing() {
  const router = useRouter();
  const { data: articles, isLoading } = useArticles();

  const handleArticlePress = (id: string) => {
    router.push(`/article/${id}`);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer} edges={['top']}>
        <Loader />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ArticlesList
          title="Articles"
          articles={articles ?? []}
          onArticlePress={handleArticlePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
