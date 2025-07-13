import { Shop } from "./shop-contract";
declare class ElectronicsStore implements Shop {
    name: string;
    isOpen: boolean;
    private gadgets;
    constructor(name: string);
    open(): void;
    close(): void;
    payRent(): boolean;
    sellGadget(item: string): void;
}
export { ElectronicsStore };
//# sourceMappingURL=electronics-store.d.ts.map