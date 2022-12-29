export interface PageMeta {
  title: string;
  description: string;
}
export interface ItemPrice {
  id: string;
  name: string;
  description?: string;
  currencyCode: string;
  price: number;
  period: number;
  periodUnit: string;
}

declare global {
  interface Window {
    // Chargebee.js must be loaded directly from https://js.chargebee.com/v2/chargebee.js, which
    // places a `Chargebee` object on the window
    Chargebee?: any;
  }
}
