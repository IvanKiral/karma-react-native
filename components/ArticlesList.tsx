import { StyleSheet, View, Text } from 'react-native';
import { BrandColors, BrandFonts } from '@/constants/theme';
import { Divider } from './Divider';
import { ArticleItem } from './ArticleItem/ArticleItem';
import type { ArticleType } from '@/model';

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  title: {
    fontFamily: BrandFonts.body,
    fontSize: 22,
    color: BrandColors.burgundy,
    textAlign: 'left',
  },
});

type ArticlesListProps = {
  readonly title: string;
  readonly articles: readonly ArticleType[];
  readonly onArticlePress: (id: string) => void;
};

export const ArticlesList = ({ title, articles, onArticlePress }: ArticlesListProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {articles.map((article, index) => (
      <View key={article.system.id}>
        <ArticleItem
          article={article}
          onReadMore={() => onArticlePress(article.system.id)}
        />
        {index < articles.length - 1 && (
          <View style={{ marginTop: 24 }}>
            <Divider />
          </View>
        )}
      </View>
    ))}
  </View>
);
