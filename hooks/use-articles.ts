import { useQuery } from '@tanstack/react-query';
import { deliveryClient } from '@/utils/client';
import type { Article } from '@/types';

export const useArticles = () =>
  useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const response = await deliveryClient
        .items<Article>()
        .type('article')
        .orderByDescending('elements.publish_date')
        .toPromise();
      return response.data.items;
    },
  });
