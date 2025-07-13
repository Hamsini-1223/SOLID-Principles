// demo.ts
// Interactive console demo showing all SOLID principles

import * as readline from "readline";
import { MallManager } from "./mall-manager";
import { ClothingStore } from "./clothing-store";
import { FoodCourt } from "./food-court";
import { ElectronicsStore } from "./electronics-store";

class InteractiveMallDemo {
  private mall: MallManager;
  private rl: readline.Interface;
  private clothingShop: ClothingStore | null = null;
  private foodCourt: FoodCourt | null = null;
  private electronicsStore: ElectronicsStore | null = null;

  constructor() {
    this.mall = new MallManager();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start(): void {
    console.log("🏢 Welcome to SOLID Shopping Mall Manager!");
    console.log("==========================================");
    console.log("This demo shows SOLID principles in action:\n");

    this.showMenu();
  }

  private showMenu(): void {
    console.log("\n📋 What would you like to do?");
    console.log("1. Add a Clothing Store (SRP)");
    console.log("2. Add a Food Court (SRP)");
    console.log("3. Add an Electronics Store (OCP)");
    console.log("4. Open All Shops (LSP)");
    console.log("5. Close All Shops (LSP)");
    console.log("6. Serve a Customer");
    console.log("7. Collect Rent from All Shops (LSP)");
    console.log("8. View Mall Status");
    console.log("9. Emergency Evacuation (LSP)");
    console.log("0. Exit");
    console.log("📖 Learn: SOLID Principles Explanation");

    this.rl.question('\nEnter your choice (0-9 or "learn"): ', (answer) => {
      this.handleChoice(answer.trim());
    });
  }

  private handleChoice(choice: string): void {
    switch (choice) {
      case "1":
        this.addClothingStore();
        break;
      case "2":
        this.addFoodCourt();
        break;
      case "3":
        this.addElectronicsStore();
        break;
      case "4":
        this.openAllShops();
        break;
      case "5":
        this.closeAllShops();
        break;
      case "6":
        this.serveCustomer();
        break;
      case "7":
        this.collectRent();
        break;
      case "8":
        this.viewMallStatus();
        break;
      case "9":
        this.emergencyEvacuation();
        break;
      case "learn":
        this.explainSOLID();
        break;
      case "0":
        this.exit();
        return;
      default:
        console.log("❌ Invalid choice. Please try again.");
        this.showMenu();
    }
  }

  private addClothingStore(): void {
    this.rl.question("Enter clothing store name: ", (name) => {
      if (!name.trim()) {
        console.log("❌ Please enter a valid name.");
        this.showMenu();
        return;
      }

      this.clothingShop = new ClothingStore(name);
      this.mall.addShop(this.clothingShop);
      console.log(`✅ Added clothing store! (SRP: Only handles clothing)`);
      this.showMenu();
    });
  }

  private addFoodCourt(): void {
    this.rl.question("Enter food court name: ", (name) => {
      if (!name.trim()) {
        console.log("❌ Please enter a valid name.");
        this.showMenu();
        return;
      }

      this.foodCourt = new FoodCourt(name);
      this.mall.addShop(this.foodCourt);
      console.log(`✅ Added food court! (SRP: Only handles food)`);
      this.showMenu();
    });
  }

  private addElectronicsStore(): void {
    this.rl.question("Enter electronics store name: ", (name) => {
      if (!name.trim()) {
        console.log("❌ Please enter a valid name.");
        this.showMenu();
        return;
      }

      this.electronicsStore = new ElectronicsStore(name);
      this.mall.addShop(this.electronicsStore);
      console.log(
        `✅ Added electronics store! (OCP: New shop type without changing existing code)`
      );
      this.showMenu();
    });
  }

  private openAllShops(): void {
    console.log("🔓 (LSP: All shops treated the same way)");
    this.mall.openAllShops();
    this.showMenu();
  }

  private closeAllShops(): void {
    console.log("🔒 (LSP: All shops treated the same way)");
    this.mall.closeAllShops();
    this.showMenu();
  }

  private serveCustomer(): void {
    if (!this.clothingShop && !this.foodCourt && !this.electronicsStore) {
      console.log("❌ No shops available. Please add some shops first.");
      this.showMenu();
      return;
    }

    console.log("\n👤 Which shop should serve the customer?");
    if (this.clothingShop) console.log("1. Clothing Store");
    if (this.foodCourt) console.log("2. Food Court");
    if (this.electronicsStore) console.log("3. Electronics Store");

    this.rl.question("Enter choice: ", (choice) => {
      switch (choice) {
        case "1":
          if (this.clothingShop) {
            this.serveAtClothingStore();
          } else {
            console.log("❌ Clothing store not available.");
            this.showMenu();
          }
          break;
        case "2":
          if (this.foodCourt) {
            this.serveAtFoodCourt();
          } else {
            console.log("❌ Food court not available.");
            this.showMenu();
          }
          break;
        case "3":
          if (this.electronicsStore) {
            this.serveAtElectronicsStore();
          } else {
            console.log("❌ Electronics store not available.");
            this.showMenu();
          }
          break;
        default:
          console.log("❌ Invalid choice.");
          this.showMenu();
      }
    });
  }

  private serveAtClothingStore(): void {
    const items = ["T-Shirt", "Jeans", "Dress"];
    console.log(`\n👕 Available items: ${items.join(", ")}`);
    this.rl.question("What would you like to buy? ", (item) => {
      this.clothingShop!.sellClothes(item);
      console.log("💡 (SRP: Clothing store only handles clothing)");
      this.showMenu();
    });
  }

  private serveAtFoodCourt(): void {
    const menu = ["Burger", "Pizza", "Coffee"];
    console.log(`\n🍔 Available food: ${menu.join(", ")}`);
    this.rl.question("What would you like to order? ", (item) => {
      this.foodCourt!.serveFood(item);
      console.log("💡 (SRP: Food court only handles food)");
      this.showMenu();
    });
  }

  private serveAtElectronicsStore(): void {
    const gadgets = ["Phone", "Laptop", "Headphones"];
    console.log(`\n📱 Available gadgets: ${gadgets.join(", ")}`);
    this.rl.question("What would you like to buy? ", (item) => {
      this.electronicsStore!.sellGadget(item);
      console.log("💡 (SRP: Electronics store only handles electronics)");
      this.showMenu();
    });
  }

  private collectRent(): void {
    console.log("💰 (LSP: All shops treated uniformly for rent collection)");
    this.mall.collectRent();
    this.showMenu();
  }

  private viewMallStatus(): void {
    console.log("\n📊 Mall Status:");
    console.log(
      `• Clothing Store: ${this.clothingShop ? "✅ Added" : "❌ Not added"}`
    );
    console.log(
      `• Food Court: ${this.foodCourt ? "✅ Added" : "❌ Not added"}`
    );
    console.log(
      `• Electronics Store: ${
        this.electronicsStore ? "✅ Added" : "❌ Not added"
      }`
    );
    this.showMenu();
  }

  private emergencyEvacuation(): void {
    console.log("🚨 EMERGENCY! Evacuating all shops...");
    console.log("💡 (LSP: All shops respond to evacuation the same way)");
    // All shops would handle evacuation uniformly
    console.log("✅ All shops evacuated safely!");
    this.showMenu();
  }

  private explainSOLID(): void {
    console.log("\n📚 SOLID Principles Explained:");
    console.log("================================");
    console.log("🔸 SRP (Single Responsibility): Each shop has ONE job");
    console.log("   • Clothing store = Only clothes");
    console.log("   • Food court = Only food");
    console.log("   • Electronics = Only gadgets");
    console.log("");
    console.log(
      "🔸 OCP (Open/Closed): Add new shops without changing existing ones"
    );
    console.log(
      "   • Electronics store added without touching clothing/food code"
    );
    console.log("");
    console.log(
      "🔸 LSP (Liskov Substitution): All shops work the same with mall manager"
    );
    console.log("   • Open all, close all, collect rent - same for every shop");
    console.log("");
    console.log(
      "🔸 ISP (Interface Segregation): Shops only use services they need"
    );
    console.log("   • Clothing uses cleaning, Food uses delivery, etc.");
    console.log("");
    console.log(
      "🔸 DIP (Dependency Inversion): Mall manager works with any shop contract"
    );
    console.log("   • Doesn't care if it's clothing, food, or electronics");
    this.showMenu();
  }

  private exit(): void {
    console.log("\n🎉 Thanks for exploring SOLID principles!");
    console.log("✅ You learned how clean code architecture works!");
    this.rl.close();
  }
}

// Start the interactive demo
const demo = new InteractiveMallDemo();
demo.start();
