import type { Elements, IContentItem } from '@kontent-ai/delivery-sdk';

export type ArticleElements = {
  readonly title: Elements.TextElement;
  readonly introduction: Elements.TextElement;
  readonly image: Elements.AssetsElement;
  readonly body_copy: Elements.RichTextElement;
  readonly publish_date: Elements.DateTimeElement;
  readonly author: Elements.LinkedItemsElement;
  readonly article_type: Elements.TaxonomyElement;
  readonly topics: Elements.TaxonomyElement;
  readonly related_articles: Elements.LinkedItemsElement;
  readonly url_slug: Elements.UrlSlugElement;
};

export type Article = IContentItem<ArticleElements>;

export type PartialArticle = IContentItem<Partial<ArticleElements>>;
