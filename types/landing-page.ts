import type { Elements, IContentItem } from '@kontent-ai/delivery-sdk';
import type { Article } from './article';
import type { Event } from './event';
import type { CallToAction } from './call-to-action';

export type LandingPageElements = {
  readonly headline: Elements.TextElement;
  readonly subheadline: Elements.TextElement;
  readonly hero_image: Elements.AssetsElement;
  readonly body_copy: Elements.RichTextElement;
  readonly featured_content: Elements.LinkedItemsElement<Event | Article | CallToAction>;
  readonly subpages: Elements.LinkedItemsElement<IContentItem>;
};

export type LandingPage = IContentItem<LandingPageElements>;
