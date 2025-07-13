interface CleaningService {
    cleanStore(): void;
}
interface SecurityService {
    callSecurity(): void;
}
interface DeliveryService {
    scheduleDelivery(): void;
}
declare class ClothingCleaning implements CleaningService {
    cleanStore(): void;
}
declare class FoodCleaning implements CleaningService {
    cleanStore(): void;
}
declare class FoodDelivery implements DeliveryService {
    scheduleDelivery(): void;
}
declare class MallSecurity implements SecurityService {
    callSecurity(): void;
}
export { CleaningService, SecurityService, DeliveryService, ClothingCleaning, FoodCleaning, FoodDelivery, MallSecurity, };
//# sourceMappingURL=services.d.ts.map