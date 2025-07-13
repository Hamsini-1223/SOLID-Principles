import { Shop } from "./shop-contract";
declare class ClothingStore implements Shop {
    name: string;
    isOpen: boolean;
    private clothes;
    constructor(name: string);
    open(): void;
    close(): void;
    payRent(): boolean;
    sellClothes(item: string): void;
}
export { ClothingStore };
//# sourceMappingURL=clothing-store.d.ts.map