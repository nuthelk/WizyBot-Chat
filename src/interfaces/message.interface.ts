export interface MessageInterface {
  id: string;
  message: string;
  sendAt: string;
  sender: "user" | "ai";
}
