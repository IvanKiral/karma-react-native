import { useQuery } from '@tanstack/react-query';
import { deliveryClient } from '@/utils/client';
import type { LandingPage } from '@/types/landing-page';

export const useLandingPage = () =>
  useQuery({
    queryKey: ['landing-page'],
    queryFn: async () => {
      const response = await deliveryClient
        .items<LandingPage>()
        .type('landing_page')
        .limitParameter(1)
        .toPromise();
      return response.data.items[0] ?? null;
    },
  });
