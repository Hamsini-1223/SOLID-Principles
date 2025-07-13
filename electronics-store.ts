// electronics-store.ts
// OCP: New shop type added without changing existing code

import { Shop } from "./shop-contract";

class ElectronicsStore implements Shop {
  name: string;
  isOpen: boolean = false;
  private gadgets: string[] = ["Phone", "Laptop", "Headphones"];

  constructor(name: string) {
    this.name = name;
  }

  open(): void {
    this.isOpen = true;
    console.log(`${this.name} electronics store is open`);
  }

  close(): void {
    this.isOpen = false;
    console.log(`${this.name} electronics store is closed`);
  }

  payRent(): boolean {
    console.log(`${this.name} paid rent`);
    return true;
  }

  // Only electronics-related methods
  sellGadget(item: string): void {
    if (this.gadgets.includes(item)) {
      console.log(`Sold ${item} from ${this.name}`);
    }
  }
}

export { ElectronicsStore };
