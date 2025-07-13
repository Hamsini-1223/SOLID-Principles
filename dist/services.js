"use strict";
// services.ts
// ISP: Different services for different needs
Object.defineProperty(exports, "__esModule", { value: true });
exports.MallSecurity = exports.FoodDelivery = exports.FoodCleaning = exports.ClothingCleaning = void 0;
// Clothing store only uses cleaning (ISP)
class ClothingCleaning {
    cleanStore() {
        console.log("Cleaning fitting rooms and folding clothes");
    }
}
exports.ClothingCleaning = ClothingCleaning;
// Food court uses cleaning and delivery (ISP)
class FoodCleaning {
    cleanStore() {
        console.log("Cleaning kitchen and tables");
    }
}
exports.FoodCleaning = FoodCleaning;
class FoodDelivery {
    scheduleDelivery() {
        console.log("Scheduled food ingredient delivery");
    }
}
exports.FoodDelivery = FoodDelivery;
// Security for all stores (ISP)
class MallSecurity {
    callSecurity() {
        console.log("Security patrol dispatched");
    }
}
exports.MallSecurity = MallSecurity;
//# sourceMappingURL=services.js.map