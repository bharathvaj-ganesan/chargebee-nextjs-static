import { ItemPrice } from 'types';

export function getActiveItemPrices(): Promise<ItemPrice[]> {
  const itemPrices: ItemPrice[] = [
    {
      id: 'cbdemo_basic-USD-monthly',
      name: 'Basic',
      description: 'For early-stage startups that want to spend more time developing and less on manual operations.',
      currencyCode: 'USD',
      price: 40000,
      period: 1,
      periodUnit: 'month',
    },
    {
      id: 'cbdemo_intermediary-USD-monthly',
      name: 'Intermediary',
      description: 'For agile startups that want to grow their revenue with quick experiments and data-driven decision making.',
      currencyCode: 'USD',
      price: 60000,
      period: 1,
      periodUnit: 'month',
    },
    {
      id: 'cbdemo_advanced-USD-monthly',
      name: 'Advanced',
      description: 'For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.',
      currencyCode: 'USD',
      price: 75000,
      period: 1,
      periodUnit: 'month',
    },
    {
      id: 'cbdemo_basic-USD-yearly',
      name: 'Basic',
      description: 'For early-stage startups that want to spend more time developing and less on manual operations.',
      currencyCode: 'USD',
      price: 400000,
      period: 1,
      periodUnit: 'year',
    },
    {
      id: 'cbdemo_intermediary-USD-yearly',
      name: 'Intermediary',
      description: 'For agile startups that want to grow their revenue with quick experiments and data-driven decision making.',
      currencyCode: 'USD',
      price: 600000,
      period: 1,
      periodUnit: 'year',
    },
    {
      id: 'cbdemo_advanced-USD-yearly',
      name: 'Advanced',
      description: 'For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.',
      currencyCode: 'USD',
      price: 750000,
      period: 1,
      periodUnit: 'year',
    }
  ];

  return Promise.resolve(itemPrices);
}
