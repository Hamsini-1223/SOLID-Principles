// services.ts
// ISP: Different services for different needs

interface CleaningService {
  cleanStore(): void;
}

interface SecurityService {
  callSecurity(): void;
}

interface DeliveryService {
  scheduleDelivery(): void;
}

// Clothing store only uses cleaning (ISP)
class ClothingCleaning implements CleaningService {
  cleanStore(): void {
    console.log("Cleaning fitting rooms and folding clothes");
  }
}

// Food court uses cleaning and delivery (ISP)
class FoodCleaning implements CleaningService {
  cleanStore(): void {
    console.log("Cleaning kitchen and tables");
  }
}

class FoodDelivery implements DeliveryService {
  scheduleDelivery(): void {
    console.log("Scheduled food ingredient delivery");
  }
}

// Security for all stores (ISP)
class MallSecurity implements SecurityService {
  callSecurity(): void {
    console.log("Security patrol dispatched");
  }
}

export {
  CleaningService,
  SecurityService,
  DeliveryService,
  ClothingCleaning,
  FoodCleaning,
  FoodDelivery,
  MallSecurity,
};
