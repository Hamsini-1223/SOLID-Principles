"use strict";
// food-court.ts
// SRP: Only handles food (Single Responsibility)
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCourt = void 0;
class FoodCourt {
    constructor(name) {
        this.isOpen = false;
        this.menu = ["Burger", "Pizza", "Coffee"];
        this.name = name;
    }
    open() {
        this.isOpen = true;
        console.log(`${this.name} food court is open`);
    }
    close() {
        this.isOpen = false;
        console.log(`${this.name} food court is closed`);
    }
    payRent() {
        console.log(`${this.name} paid rent`);
        return true;
    }
    // Only food-related methods
    serveFood(item) {
        if (this.menu.includes(item)) {
            console.log(`Served ${item} from ${this.name}`);
        }
    }
}
exports.FoodCourt = FoodCourt;
//# sourceMappingURL=food-court.js.map