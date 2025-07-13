// shop-contract.ts
// This is the basic contract every shop must follow (DIP)

interface Shop {
  name: string;
  isOpen: boolean;

  open(): void;
  close(): void;
  payRent(): boolean;
}

export { Shop };
