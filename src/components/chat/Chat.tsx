import { useState } from "react";
import "./chat.css";
import { BodyChat } from "./components/BodyChat";
import FooterChat from "./components/FooterChat";
import { HeaderChat } from "./components/HeaderChat";
import { MessageInterface } from "../../interfaces/message.interface";

const Chat = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);

  const onAddMessage = (message: MessageInterface) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="m-auto bg-white h-[600px] w-full min-w-[300px] max-w-[350px] rounded-lg">
      <HeaderChat />
      <BodyChat messages={messages} />
      <FooterChat onAddMessage={onAddMessage} />
    </div>
  );
};

export default Chat;
