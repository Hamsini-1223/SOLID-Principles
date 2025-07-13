"use strict";
// demo.ts
// Interactive console demo showing all SOLID principles
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const mall_manager_1 = require("./mall-manager");
const clothing_store_1 = require("./clothing-store");
const food_court_1 = require("./food-court");
const electronics_store_1 = require("./electronics-store");
class InteractiveMallDemo {
    constructor() {
        this.clothingShop = null;
        this.foodCourt = null;
        this.electronicsStore = null;
        this.mall = new mall_manager_1.MallManager();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    start() {
        console.log("🏢 Welcome to SOLID Shopping Mall Manager!");
        console.log("==========================================");
        console.log("This demo shows SOLID principles in action:\n");
        this.showMenu();
    }
    showMenu() {
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
    handleChoice(choice) {
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
    addClothingStore() {
        this.rl.question("Enter clothing store name: ", (name) => {
            if (!name.trim()) {
                console.log("❌ Please enter a valid name.");
                this.showMenu();
                return;
            }
            this.clothingShop = new clothing_store_1.ClothingStore(name);
            this.mall.addShop(this.clothingShop);
            console.log(`✅ Added clothing store! (SRP: Only handles clothing)`);
            this.showMenu();
        });
    }
    addFoodCourt() {
        this.rl.question("Enter food court name: ", (name) => {
            if (!name.trim()) {
                console.log("❌ Please enter a valid name.");
                this.showMenu();
                return;
            }
            this.foodCourt = new food_court_1.FoodCourt(name);
            this.mall.addShop(this.foodCourt);
            console.log(`✅ Added food court! (SRP: Only handles food)`);
            this.showMenu();
        });
    }
    addElectronicsStore() {
        this.rl.question("Enter electronics store name: ", (name) => {
            if (!name.trim()) {
                console.log("❌ Please enter a valid name.");
                this.showMenu();
                return;
            }
            this.electronicsStore = new electronics_store_1.ElectronicsStore(name);
            this.mall.addShop(this.electronicsStore);
            console.log(`✅ Added electronics store! (OCP: New shop type without changing existing code)`);
            this.showMenu();
        });
    }
    openAllShops() {
        console.log("🔓 (LSP: All shops treated the same way)");
        this.mall.openAllShops();
        this.showMenu();
    }
    closeAllShops() {
        console.log("🔒 (LSP: All shops treated the same way)");
        this.mall.closeAllShops();
        this.showMenu();
    }
    serveCustomer() {
        if (!this.clothingShop && !this.foodCourt && !this.electronicsStore) {
            console.log("❌ No shops available. Please add some shops first.");
            this.showMenu();
            return;
        }
        console.log("\n👤 Which shop should serve the customer?");
        if (this.clothingShop)
            console.log("1. Clothing Store");
        if (this.foodCourt)
            console.log("2. Food Court");
        if (this.electronicsStore)
            console.log("3. Electronics Store");
        this.rl.question("Enter choice: ", (choice) => {
            switch (choice) {
                case "1":
                    if (this.clothingShop) {
                        this.serveAtClothingStore();
                    }
                    else {
                        console.log("❌ Clothing store not available.");
                        this.showMenu();
                    }
                    break;
                case "2":
                    if (this.foodCourt) {
                        this.serveAtFoodCourt();
                    }
                    else {
                        console.log("❌ Food court not available.");
                        this.showMenu();
                    }
                    break;
                case "3":
                    if (this.electronicsStore) {
                        this.serveAtElectronicsStore();
                    }
                    else {
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
    serveAtClothingStore() {
        const items = ["T-Shirt", "Jeans", "Dress"];
        console.log(`\n👕 Available items: ${items.join(", ")}`);
        this.rl.question("What would you like to buy? ", (item) => {
            this.clothingShop.sellClothes(item);
            console.log("💡 (SRP: Clothing store only handles clothing)");
            this.showMenu();
        });
    }
    serveAtFoodCourt() {
        const menu = ["Burger", "Pizza", "Coffee"];
        console.log(`\n🍔 Available food: ${menu.join(", ")}`);
        this.rl.question("What would you like to order? ", (item) => {
            this.foodCourt.serveFood(item);
            console.log("💡 (SRP: Food court only handles food)");
            this.showMenu();
        });
    }
    serveAtElectronicsStore() {
        const gadgets = ["Phone", "Laptop", "Headphones"];
        console.log(`\n📱 Available gadgets: ${gadgets.join(", ")}`);
        this.rl.question("What would you like to buy? ", (item) => {
            this.electronicsStore.sellGadget(item);
            console.log("💡 (SRP: Electronics store only handles electronics)");
            this.showMenu();
        });
    }
    collectRent() {
        console.log("💰 (LSP: All shops treated uniformly for rent collection)");
        this.mall.collectRent();
        this.showMenu();
    }
    viewMallStatus() {
        console.log("\n📊 Mall Status:");
        console.log(`• Clothing Store: ${this.clothingShop ? "✅ Added" : "❌ Not added"}`);
        console.log(`• Food Court: ${this.foodCourt ? "✅ Added" : "❌ Not added"}`);
        console.log(`• Electronics Store: ${this.electronicsStore ? "✅ Added" : "❌ Not added"}`);
        this.showMenu();
    }
    emergencyEvacuation() {
        console.log("🚨 EMERGENCY! Evacuating all shops...");
        console.log("💡 (LSP: All shops respond to evacuation the same way)");
        // All shops would handle evacuation uniformly
        console.log("✅ All shops evacuated safely!");
        this.showMenu();
    }
    explainSOLID() {
        console.log("\n📚 SOLID Principles Explained:");
        console.log("================================");
        console.log("🔸 SRP (Single Responsibility): Each shop has ONE job");
        console.log("   • Clothing store = Only clothes");
        console.log("   • Food court = Only food");
        console.log("   • Electronics = Only gadgets");
        console.log("");
        console.log("🔸 OCP (Open/Closed): Add new shops without changing existing ones");
        console.log("   • Electronics store added without touching clothing/food code");
        console.log("");
        console.log("🔸 LSP (Liskov Substitution): All shops work the same with mall manager");
        console.log("   • Open all, close all, collect rent - same for every shop");
        console.log("");
        console.log("🔸 ISP (Interface Segregation): Shops only use services they need");
        console.log("   • Clothing uses cleaning, Food uses delivery, etc.");
        console.log("");
        console.log("🔸 DIP (Dependency Inversion): Mall manager works with any shop contract");
        console.log("   • Doesn't care if it's clothing, food, or electronics");
        this.showMenu();
    }
    exit() {
        console.log("\n🎉 Thanks for exploring SOLID principles!");
        console.log("✅ You learned how clean code architecture works!");
        this.rl.close();
    }
}
// Start the interactive demo
const demo = new InteractiveMallDemo();
demo.start();
//# sourceMappingURL=demo.js.map