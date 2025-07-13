// food-court.ts
// SRP: Only handles food (Single Responsibility)

import { Shop } from "./shop-contract";

class FoodCourt implements Shop {
  name: string;
  isOpen: boolean = false;
  private menu: string[] = ["Burger", "Pizza", "Coffee"];

  constructor(name: string) {
    this.name = name;
  }

  open(): void {
    this.isOpen = true;
    console.log(`${this.name} food court is open`);
  }

  close(): void {
    this.isOpen = false;
    console.log(`${this.name} food court is closed`);
  }

  payRent(): boolean {
    console.log(`${this.name} paid rent`);
    return true;
  }

  // Only food-related methods
  serveFood(item: string): void {
    if (this.menu.includes(item)) {
      console.log(`Served ${item} from ${this.name}`);
    }
  }
}

export { FoodCourt };
