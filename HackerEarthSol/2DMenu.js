function findMostUpdatedMenu(menus) {
  let maxGoodPrices = 0;
  let mostUpdatedMenu = null;

  menus.forEach((menu) => {
    let goodPricesCount = 0;
    let totalPrice = 0;
    let pricesCount = {};

    menu.forEach((price, index) => {
      if (!pricesCount[index] || pricesCount[index] < price) {
        pricesCount[index] = price;
      }
    });

    Object.values(pricesCount).forEach((price) => {
      if (price) {
        goodPricesCount++;
        totalPrice += price;
      }
    });

    if (
      goodPricesCount > maxGoodPrices ||
      (goodPricesCount === maxGoodPrices &&
        (mostUpdatedMenu === null ||
          totalPrice / goodPricesCount >
            mostUpdatedMenu.totalPrice / maxGoodPrices))
    ) {
      maxGoodPrices = goodPricesCount;
      mostUpdatedMenu = {
        menu: menu,
        totalPrice: totalPrice,
      };
    }
  });

  return mostUpdatedMenu.menu;
}

// Example usage:
const menus = [
  [1, 2, 1, 10],
  [3, 2, 3, 4],
  [1, 3, 3, 2],
];

const mostUpdatedMenu = findMostUpdatedMenu(menus);
console.log("Most updated menu:", mostUpdatedMenu);
