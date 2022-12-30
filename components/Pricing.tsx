'use client';

import cn from 'classnames';
import { useEffect, useState } from 'react';

import Button from 'components/ui/Button';
import { ItemPrice } from 'types';
import Script from 'next/script';

interface Props {
  itemPrices: ItemPrice[];
}

type PeriodUnit = 'year' | 'month';

export default function Pricing({ itemPrices }: Props) {
  const [periodUnit, setPeriodUnit] = useState<PeriodUnit>('month');
  const [itemPricesToDisplay, setItemPricesToDisplay] = useState<ItemPrice[]>([]);

  useEffect(() => {
    setItemPricesToDisplay(itemPrices.filter((item) => item.periodUnit === periodUnit));
  }, [itemPrices, periodUnit]);

  useEffect(() => {
    window.Chargebee?.registerAgain?.();
  });

  return (
    <section className="bg-black">
      <Script
        src="https://js.chargebee.com/v2/chargebee.js"
        onLoad={() => {
          window.Chargebee.init({
            site: process.env.NEXT_PUBLIC_CHARGEBEE_SITE_ID,
            isItemsModel: true,
          });
        }}
      />
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-primary sm:text-center sm:text-6xl">Pricing</h1>
          <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
          <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
            <button
              onClick={() => setPeriodUnit('month')}
              type="button"
              className={`${
                periodUnit === 'month'
                  ? 'relative w-1/2 bg-primary border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setPeriodUnit('year')}
              type="button"
              className={`${
                periodUnit === 'year'
                  ? 'relative w-1/2 bg-primary border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-3xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {itemPricesToDisplay.map((itemPrice, idx) => {
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: itemPrice.currencyCode,
              minimumFractionDigits: 0,
            }).format((itemPrice.price || 0) / 100);

            return (
              <div key={itemPrice.id} className={cn('rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900')}>
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-white">{itemPrice.name}</h2>
                  <p className="mt-4 text-zinc-300">{itemPrice.description}</p>
                  <p className="mt-12">
                    <span className="text-5xl font-extrabold white">{priceString}</span>
                    <span className="text-base font-medium text-zinc-100">/{periodUnit}</span>
                  </p>
                  <div data-cb-type="checkout" data-cb-item-0={itemPrice.id} data-cb-item-0-quantity="1">
                    <Button
                      variant="slim"
                      className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-center hover:bg-zinc-900 hover:border-primary"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
            Brought to you by
          </p>
          <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-3">
            <div className="flex items-center justify-start">
              <a target="_blank" href="https://nextjs.org" rel="noreferrer" aria-label="Next.js Link">
                <img src="/nextjs.svg" alt="Next.js Logo" className="h-12 text-white" />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a target="_blank" href="https://chargebee.com" rel="noreferrer" aria-label="chargebee.com Link">
                <img src="/chargebee.svg" alt="chargebee.com Logo" className="h-14 text-white" />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a target="_blank" href="https://github.com" rel="noreferrer" aria-label="github.com Link">
                <img src="/github.svg" alt="github.com Logo" className="h-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
