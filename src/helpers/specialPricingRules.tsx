const DISCOUNT_STRING = 'discount';
const BOGO_STRING = 'bogo';

interface CustomerRule {
  customerName: string,
  rules: Array<PricingRule>
}

interface PricingRule {
  appliesTo: string,
  type: string,
  details: any,
}

const PRICING_RULES: Array<CustomerRule> = [
  {
    customerName: 'secondBite',
    rules: [
      {
        appliesTo: 'classic',
        type: BOGO_STRING,
        details: {
          buy: 2,
          get: 3,
        }
      }
    ]
  },
  {
    customerName: 'axil',
    rules: [
      {
        appliesTo: 'standOut',
        type: DISCOUNT_STRING,
        details: {
          specialPrice: 29999,
        }
      }
    ]
  }
]

export { PRICING_RULES, DISCOUNT_STRING, BOGO_STRING };
export type { CustomerRule, PricingRule };
