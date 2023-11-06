function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  for (const product in products) {
    totalProducts += products[product];
  }
  let totalSum = totalProducts <= containerSize;

  return totalSum;
}
