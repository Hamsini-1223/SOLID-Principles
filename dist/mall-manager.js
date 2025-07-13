"use strict";
// mall-manager.ts
// DIP: Mall manager works with any shop that follows the contract
Object.defineProperty(exports, "__esModule", { value: true });
exports.MallManager = void 0;
class MallManager {
    constructor() {
        this.shops = [];
    }
    // DIP: Accepts any shop that implements Shop interface
    addShop(shop) {
        this.shops.push(shop);
        console.log(`Added ${shop.name} to the mall`);
    }
    // LSP: Treats all shops the same way
    openAllShops() {
        console.log("\n--- Opening Mall ---");
        this.shops.forEach((shop) => shop.open());
    }
    closeAllShops() {
        console.log("\n--- Closing Mall ---");
        this.shops.forEach((shop) => shop.close());
    }
    collectRent() {
        console.log("\n--- Collecting Rent ---");
        this.shops.forEach((shop) => shop.payRent());
    }
}
exports.MallManager = MallManager;
//# sourceMappingURL=mall-manager.js.map