import type { Elements, IContentItem } from '@kontent-ai/delivery-sdk';

export type CallToActionElements = {
  readonly headline: Elements.TextElement;
  readonly subheadline: Elements.TextElement;
  readonly image: Elements.AssetsElement;
  readonly image_position: Elements.MultipleChoiceElement;
  readonly button_label: Elements.TextElement;
  readonly button_link: Elements.LinkedItemsElement;
};

export type CallToAction = IContentItem<CallToActionElements>;

export const isCallToAction = (item: IContentItem): item is CallToAction =>
  item.system.type === 'call_to_action';
