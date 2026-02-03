import { StyleSheet, View, Pressable, Text, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { BrandColors, BrandFonts } from '@/constants/theme';

const MENU_ITEMS = ['Solutions', 'Products', 'Pricing', 'Contact', 'Our Company'] as const;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  text: {
    fontFamily: BrandFonts.body,
    fontSize: 16,
    color: BrandColors.gray,
  },
  textHovered: {
    color: BrandColors.burgundy,
  },
});

type NavItemProps = {
  readonly label: string;
};

const NavItem = ({ label }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="#" asChild>
      <Pressable
        style={styles.item}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
      >
        <Text style={[styles.text, isHovered && styles.textHovered]}>{label}</Text>
      </Pressable>
    </Link>
  );
};

export const Navigation = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.container, isTablet ? styles.row : styles.column]}>
      {MENU_ITEMS.map((item) => (
        <NavItem key={item} label={item} />
      ))}
    </View>
  );
};
