import type { Elements, IContentItem } from '@kontent-ai/delivery-sdk';

export type DisclaimerElements = {
  readonly headline: Elements.TextElement;
  readonly subheadline: Elements.TextElement;
  readonly type: Elements.MultipleChoiceElement;
};

export type Disclaimer = IContentItem<DisclaimerElements>;

export const isDisclaimer = (item: IContentItem): item is Disclaimer =>
  item.system.type === 'disclaimer';
