import { StyleSheet, ScrollView } from 'react-native';
import type { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { Container } from '../Container/Container';
import { BrandColors } from '@/constants/theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: BrandColors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

type WebLayoutProps = {
  readonly children: ReactNode;
};

export const WebLayout = ({ children }: WebLayoutProps) => (
  <ScrollView style={styles.wrapper} contentContainerStyle={styles.scrollContent}>
    <Container>
      <Header />
    </Container>
    {children}
    <Footer />
  </ScrollView>
);
