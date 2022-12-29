import Pricing from 'components/Pricing';
import { ItemPrice } from 'types';
import { getActiveItemPrices } from '@/utils/chargebee';

export async function getData(): Promise<ItemPrice[]> {
  const itemPrices = await getActiveItemPrices();
  return itemPrices;
}

export default async function PricingPage() {
  const itemPrices = await getData();
  return <Pricing itemPrices={itemPrices} />;
}
