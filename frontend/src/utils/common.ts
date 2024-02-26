function moneyformat(price: number): string {
  return new Intl.NumberFormat().format(price);
}

function calculateTotalPrice(priceList: number[]): number {
  return priceList.reduce((acc, cur) => acc + cur, 0);
}

export { moneyformat, calculateTotalPrice };
