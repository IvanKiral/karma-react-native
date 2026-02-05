import { createDeliveryClient } from '@kontent-ai/delivery-sdk';

const environmentId = process.env.EXPO_PUBLIC_KONTENT_ENVIRONMENT_ID;

if (!environmentId) {
  throw new Error('EXPO_PUBLIC_KONTENT_ENVIRONMENT_ID is not defined in .env');
}

export const deliveryClient = createDeliveryClient({
  environmentId,
});
