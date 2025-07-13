// mall-manager.ts
// DIP: Mall manager works with any shop that follows the contract

import { Shop } from "./shop-contract";

class MallManager {
  private shops: Shop[] = [];

  // DIP: Accepts any shop that implements Shop interface
  addShop(shop: Shop): void {
    this.shops.push(shop);
    console.log(`Added ${shop.name} to the mall`);
  }

  // LSP: Treats all shops the same way
  openAllShops(): void {
    console.log("\n--- Opening Mall ---");
    this.shops.forEach((shop) => shop.open());
  }

  closeAllShops(): void {
    console.log("\n--- Closing Mall ---");
    this.shops.forEach((shop) => shop.close());
  }

  collectRent(): void {
    console.log("\n--- Collecting Rent ---");
    this.shops.forEach((shop) => shop.payRent());
  }
}

export { MallManager };
