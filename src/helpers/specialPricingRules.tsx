const DISCOUNT_STRING = 'discount';
const DISCOUNT_THRESHOLD_STRING = 'discountExtension';
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
  },
  {
    customerName: 'myer',
    rules: [
      {
        appliesTo: 'classic',
        type: DISCOUNT_THRESHOLD_STRING,
        details: {
          threshold: 3,
          specialPrice: 24999,
        }
      },
      {
        appliesTo: 'premium',
        type: DISCOUNT_STRING,
        details: {
          specialPrice: 38999,
        }
      },
      {
        appliesTo: 'standOut',
        type: BOGO_STRING,
        details: {
          buy: 4,
          get: 5,
        }
      }
    ]
  },
  {
    customerName: 'jora',
    rules: [
      {
        appliesTo: 'premium',
        type: DISCOUNT_THRESHOLD_STRING,
        details: {
          threshold: 4,
          specialPrice: 37999,
        }
      }
    ]
  }
]

export { PRICING_RULES, DISCOUNT_STRING, DISCOUNT_THRESHOLD_STRING, BOGO_STRING };
export type { CustomerRule, PricingRule };
