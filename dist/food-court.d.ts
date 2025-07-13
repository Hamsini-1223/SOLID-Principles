import { Shop } from "./shop-contract";
declare class FoodCourt implements Shop {
    name: string;
    isOpen: boolean;
    private menu;
    constructor(name: string);
    open(): void;
    close(): void;
    payRent(): boolean;
    serveFood(item: string): void;
}
export { FoodCourt };
//# sourceMappingURL=food-court.d.ts.map