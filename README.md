# SOLID Principles Shopping Mall Demo

A TypeScript application demonstrating SOLID principles through a shopping mall management system. This application includes and explains 
- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
The other 2 principles are explain in the blow mentioned repository:
```
https://github.com/Hamsini-1223/SOLID
```

## Overview

This project provides practical examples of all five SOLID principles:

- **Single Responsibility Principle (SRP)** - Each store handles one type of business
- **Open/Closed Principle (OCP)** - New store types can be added without modifying existing code
- **Liskov Substitution Principle (LSP)** - All stores work interchangeably with the mall manager
- **Interface Segregation Principle (ISP)** - Services are split into focused interfaces
- **Dependency Inversion Principle (DIP)** - High-level modules depend on abstractions

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/Hamsini-1223/SOLID-Principles
cd SOLID-Princples

# Install dependencies
npm install
```

## Usage

Run the interactive demo:

```bash
npm run demo
```

Available commands:

- `npm run build` - Compile TypeScript
- `npm run start` - Build and run
- `npm run dev` - Run with ts-node

## Project Structure

```
├── shop-contract.ts      # Base shop interface
├── clothing-store.ts     # Clothing store implementation
├── food-court.ts         # Food court implementation
├── electronics-store.ts  # Electronics store implementation
├── mall-manager.ts       # Mall management system
├── services.ts           # Service interfaces
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── demo.ts               # Interactive console demo
```

## Code Examples

### Single Responsibility Principle

Each store class has one responsibility:

```typescript
class ClothingStore implements Shop {
  sellClothes(item: string): void {
    // Only handles clothing sales
  }
}
```

### Open/Closed Principle

New store types extend functionality without modifying existing code:

```typescript
class ElectronicsStore implements Shop {
  sellGadget(item: string): void {
    // New functionality, no changes to existing stores
  }
}
```

### Liskov Substitution Principle

All stores work uniformly with the mall manager:

```typescript
class MallManager {
  openAllShops(): void {
    this.shops.forEach((shop) => shop.open());
  }
}
```

## Output

When you run `npm run demo`, you'll see an interactive menu:

```
🏢 Welcome to SOLID Shopping Mall Manager!
==========================================
This demo shows SOLID principles in action:

📋 What would you like to do?
1. Add a Clothing Store (SRP)
2. Add a Food Court (SRP)
3. Add an Electronics Store (OCP)
4. Open All Shops (LSP)
5. Close All Shops (LSP)
6. Serve a Customer
7. Collect Rent from All Shops (LSP)
8. View Mall Status
9. Emergency Evacuation (LSP)
0. Exit
📖 Learn: SOLID Principles Explanation

Enter your choice (0-9 or "learn"):
```

Sample interaction:

```
✅ Added clothing store! (SRP: Only handles clothing)
--- Opening Mall ---
Fashion Store clothing store is open
✅ Sold T-Shirt from Fashion Store
💡 (SRP: Clothing store only handles clothing)
```

## Requirements

- Node.js 16+
- TypeScript 5.0+

## Built by

Ms Hamsini S
