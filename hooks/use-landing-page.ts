import { useQuery } from '@tanstack/react-query';
import { createKontentClient } from '@/utils/client';
import { usePreviewMode } from '@/providers/preview-mode-provider';
import type { LandingPage } from '@/types/landing-page';

export const useLandingPage = () => {
  const { isPreview } = usePreviewMode();

  return useQuery({
    queryKey: ['landing-page', { isPreview }],
    queryFn: async () => {
      const client = createKontentClient(isPreview);
      const response = await client
        .items<LandingPage>()
        .type('landing_page')
        .limitParameter(1)
        .toPromise();
      return response.data.items[0] ?? null;
    },
  });
};
