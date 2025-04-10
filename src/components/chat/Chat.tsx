import { useState } from "react";
import { BodyChat } from "./components/BodyChat";
import FooterChat from "./components/FooterChat";
import { HeaderChat } from "./components/HeaderChat";
import { MessageInterface } from "../../interfaces/message.interface";
import { formatDateMessage } from "../../utils/formatDateMessage";
import { v4 as uuidv4 } from "uuid";
import { generateRandomText } from "../../utils/generateRandomTextResponse";

import "./chat.css";
import { getProducts } from "../../api/getProducts";

const Chat = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [isLoadMessageAI, setIsLoadMessageAI] = useState(false);

  //function to add messages
  const onAddMessage = (message: MessageInterface) => {
    setMessages((prev) => [...prev, message]);
    if (
      message.message?.toLowerCase()?.includes("i want product recommendations") //if compliant, a product message is added
    ) {
      getProducts().then((products) => {
        const messageAI: MessageInterface = {
          id: uuidv4(),
          sendAt: formatDateMessage(new Date()),
          products: products,
        };
        setMessages((prev) => [...prev, messageAI]);
      });
    } else {
      //if you do not add a normal message AI
      if (!isLoadMessageAI) {
        //to avoid multiple replies if the user sends more than one message
        setIsLoadMessageAI(true);

        setTimeout(() => {
          const messageAI: MessageInterface = {
            id: uuidv4(),
            message: generateRandomText(),
            sendAt: formatDateMessage(new Date()),
            sender: "ai",
          };
          setMessages((prev) => [...prev, messageAI]);
          setIsLoadMessageAI(false);
        }, 3000); //3 seconds for send message AI
      }
    }
  };

  return (
    <div className="m-auto bg-white h-full  w-full min-w-[200px] max-w-[450px] rounded-lg">
      <HeaderChat />
      <BodyChat isLoadMessageAI={isLoadMessageAI} messages={messages} />
      <FooterChat onAddMessage={onAddMessage} />
    </div>
  );
};

export default Chat;
