import type { IContentItem } from '@kontent-ai/delivery-sdk';
import { BrandColors, BrandFonts } from '@/constants/theme';
import { transformToPortableText } from '@kontent-ai/rich-text-resolver';
import { PortableText, PortableTextComponents } from '@portabletext/react-native';
import { useMemo } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { isCallToAction, isDisclaimer } from '@/types';
import { Callout } from './Callout';
import { CallToAction } from './CallToAction';

type RichTextProps = {
  readonly value: string;
  readonly linkedItems?: ReadonlyArray<IContentItem>;
};

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: BrandFonts.body,
    fontSize: 16,
    color: BrandColors.gray,
    lineHeight: 24,
    marginBottom: 12,
  },
  h1: {
    fontFamily: BrandFonts.heading,
    fontSize: 28,
    color: BrandColors.burgundy,
    marginBottom: 16,
  },
  h2: {
    fontFamily: BrandFonts.heading,
    fontSize: 24,
    color: BrandColors.burgundy,
    marginBottom: 14,
  },
  h3: {
    fontFamily: BrandFonts.heading,
    fontSize: 20,
    color: BrandColors.burgundy,
    marginBottom: 12,
  },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  link: { color: BrandColors.azure, textDecorationLine: 'underline' },
  blockquote: {
    borderLeftWidth: 3,
    borderLeftColor: BrandColors.burgundy,
    paddingLeft: 12,
    marginVertical: 12,
  },
  blockquoteText: {
    fontStyle: 'italic',
    color: BrandColors.grayLight,
  },
  list: { marginVertical: 8 },
  listItem: { flexDirection: 'row', marginBottom: 4 },
  bullet: { width: 20, color: BrandColors.gray },
  listItemText: {
    flex: 1,
    fontFamily: BrandFonts.body,
    fontSize: 16,
    color: BrandColors.gray,
    lineHeight: 24,
  },
});

const createComponents = (
  linkedItems: ReadonlyArray<IContentItem>
): PortableTextComponents => ({
  block: {
    normal: ({ children }) => <Text style={styles.paragraph}>{children}</Text>,
    h1: ({ children }) => <Text style={styles.h1}>{children}</Text>,
    h2: ({ children }) => <Text style={styles.h2}>{children}</Text>,
    h3: ({ children }) => <Text style={styles.h3}>{children}</Text>,
    blockquote: ({ children }) => (
      <View style={styles.blockquote}>
        <Text style={styles.blockquoteText}>{children}</Text>
      </View>
    ),
  },
  marks: {
    strong: ({ children }) => <Text style={styles.bold}>{children}</Text>,
    em: ({ children }) => <Text style={styles.italic}>{children}</Text>,
    link: ({ value, children }) => (
      <Text
        style={styles.link}
        onPress={() => value?.href && Linking.openURL(value.href)}
      >
        {children}
      </Text>
    ),
  },
  list: {
    bullet: ({ children }) => <View style={styles.list}>{children}</View>,
    number: ({ children }) => <View style={styles.list}>{children}</View>,
  },
  listItem: {
    bullet: ({ children }) => (
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.listItemText}>{children}</Text>
      </View>
    ),
    number: ({ children, index }) => (
      <View style={styles.listItem}>
        <Text style={styles.bullet}>{(index ?? 0) + 1}.</Text>
        <Text style={styles.listItemText}>{children}</Text>
      </View>
    ),
  },
  types: {
    componentOrItem: ({ value }) => {
      const item = linkedItems.find(
        i => i.system.codename === value.componentOrItem._ref
      );
      if (!item) return null;

      if (isDisclaimer(item)) {
        return (
          <Callout
            title={item.elements.headline.value}
            body={item.elements.subheadline.value}
          />
        );
      }

      if (isCallToAction(item)) {
        return (
          <CallToAction
            title={item.elements.headline.value}
            description={item.elements.subheadline.value}
            buttonText={item.elements.button_label.value}
            buttonUrl={item.elements.button_link.linkedItems[0]?.elements.url?.value ?? ''}
            imageUrl={item.elements.image.value[0]?.url}
          />
        );
      }

      return null;
    },
  },
});

export const RichText = ({ value, linkedItems = [] }: RichTextProps) => {
  const portableText = useMemo(() => transformToPortableText(value), [value]);
  const components = useMemo(() => createComponents(linkedItems), [linkedItems]);

  return <PortableText value={portableText} components={components} />;
};
