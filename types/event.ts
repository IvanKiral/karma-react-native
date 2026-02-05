import type { Elements, IContentItem } from '@kontent-ai/delivery-sdk';

export type EventElements = {
  readonly title: Elements.TextElement;
  readonly start_date: Elements.DateTimeElement;
  readonly end_date: Elements.DateTimeElement;
  readonly location: Elements.TextElement;
  readonly description: Elements.RichTextElement;
  readonly image: Elements.AssetsElement;
};

export type Event = IContentItem<EventElements>;
