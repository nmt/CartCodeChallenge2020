interface CustomerRule {
  customerName: string,
  rules: Array<PricingRule>
}

interface PricingRule {
  appliesTo: string,
  type: string,
  specialPrice?: number,
  buy?: number,
  get?: number,
}

const PRICING_RULES: Array<CustomerRule> = [
  {
    customerName: 'secondBite',
    rules: [
      {
        appliesTo: 'classic',
        type: 'bogo',
        buy: 2,
        get: 3,
      }
    ]
  },
  {
    customerName: 'axil',
    rules: [
      {
        appliesTo: 'standOut',
        type: 'discount',
        specialPrice: 29999,
      }
    ]
  }
]

export default PRICING_RULES;