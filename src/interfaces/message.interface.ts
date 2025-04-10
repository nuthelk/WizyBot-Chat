import { WizyProductsInterface } from "./wizyProducts.interface";

export interface MessageInterface {
  id: string;
  sendAt: string;
  products?: WizyProductsInterface[];
  message?: string;
  sender?: "user" | "ai";
}
