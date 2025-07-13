"use strict";
// clothing-store.ts
// SRP: Only handles clothing (Single Responsibility)
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothingStore = void 0;
class ClothingStore {
    constructor(name) {
        this.isOpen = false;
        this.clothes = ["T-Shirt", "Jeans", "Dress"];
        this.name = name;
    }
    open() {
        this.isOpen = true;
        console.log(`${this.name} clothing store is open`);
    }
    close() {
        this.isOpen = false;
        console.log(`${this.name} clothing store is closed`);
    }
    payRent() {
        console.log(`${this.name} paid rent`);
        return true;
    }
    // Only clothing-related methods
    sellClothes(item) {
        if (this.clothes.includes(item)) {
            console.log(`Sold ${item} from ${this.name}`);
        }
    }
}
exports.ClothingStore = ClothingStore;
//# sourceMappingURL=clothing-store.js.map