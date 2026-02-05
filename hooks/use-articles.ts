import { useQuery } from '@tanstack/react-query';
import { createKontentClient } from '@/utils/client';
import { usePreviewMode } from '@/providers/preview-mode-provider';
import type { Article } from '@/types';

export const useArticles = () => {
  const { isPreview } = usePreviewMode();

  return useQuery({
    queryKey: ['articles', { isPreview }],
    queryFn: async () => {
      const client = createKontentClient(isPreview);
      const response = await client
        .items<Article>()
        .type('article')
        .orderByDescending('elements.publish_date')
        .toPromise();
      return response.data.items;
    },
  });
};
