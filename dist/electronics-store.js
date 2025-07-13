"use strict";
// electronics-store.ts
// OCP: New shop type added without changing existing code
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicsStore = void 0;
class ElectronicsStore {
    constructor(name) {
        this.isOpen = false;
        this.gadgets = ["Phone", "Laptop", "Headphones"];
        this.name = name;
    }
    open() {
        this.isOpen = true;
        console.log(`${this.name} electronics store is open`);
    }
    close() {
        this.isOpen = false;
        console.log(`${this.name} electronics store is closed`);
    }
    payRent() {
        console.log(`${this.name} paid rent`);
        return true;
    }
    // Only electronics-related methods
    sellGadget(item) {
        if (this.gadgets.includes(item)) {
            console.log(`Sold ${item} from ${this.name}`);
        }
    }
}
exports.ElectronicsStore = ElectronicsStore;
//# sourceMappingURL=electronics-store.js.map