import { MessageInterface } from "../../../interfaces/message.interface";
import { Message } from "./Message";

type Props = {
  messages: MessageInterface[];
};

export const BodyChat = ({ messages }: Props) => {
  return (
    <section className="h-[450px] overflow-y-auto w-full px-2 py-4 flex flex-col gap-4">
      {messages.length > 0 &&
        messages.map((message) => (
          <Message
            sendAt={message.sendAt}
            textMessage={message.message}
            sender={message.sender}
            key={message.id}
          />
        ))}
    </section>
  );
};
