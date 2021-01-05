interface Item {
  name: string,
  quantity: number,
  price: number,
  subtotal: number,
}

const ITEMS: Array<Item> = [
  {
    name: 'classic',
    quantity: 0,
    price: 26999,
    subtotal: 0,
  },
  {
    name: 'standOut',
    quantity: 0,
    price: 32299,
    subtotal: 0,
  },
  {
    name: 'premium',
    quantity: 0,
    price: 39499,
    subtotal: 0,
  }]

export { ITEMS };
export type { Item };
