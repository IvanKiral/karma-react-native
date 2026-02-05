import { useQuery } from '@tanstack/react-query';
import { deliveryClient } from '@/utils/client';
import type { Article } from '@/types';

export const useArticle = (id: string | undefined) =>
  useQuery({
    queryKey: ['article', id],
    queryFn: async () => {
      const response = await deliveryClient
        .items<Article>()
        .type('article')
        .equalsFilter('system.id', id ?? '')
        .depthParameter(1)
        .toPromise();
      return response.data.items[0] ?? null;
    },
    enabled: !!id,
  });
