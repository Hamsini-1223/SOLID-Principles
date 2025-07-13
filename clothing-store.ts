// clothing-store.ts
// SRP: Only handles clothing (Single Responsibility)

import { Shop } from "./shop-contract";

class ClothingStore implements Shop {
  name: string;
  isOpen: boolean = false;
  private clothes: string[] = ["T-Shirt", "Jeans", "Dress"];

  constructor(name: string) {
    this.name = name;
  }

  open(): void {
    this.isOpen = true;
    console.log(`${this.name} clothing store is open`);
  }

  close(): void {
    this.isOpen = false;
    console.log(`${this.name} clothing store is closed`);
  }

  payRent(): boolean {
    console.log(`${this.name} paid rent`);
    return true;
  }

  // Only clothing-related methods
  sellClothes(item: string): void {
    if (this.clothes.includes(item)) {
      console.log(`Sold ${item} from ${this.name}`);
    }
  }
}

export { ClothingStore };
