import { useEffect, useRef } from "react";
import { MessageInterface } from "../../../interfaces/message.interface";
import { Message } from "./Message";
import LoadingDots from "./LoadingDots";
import ProductCarousel from "./CarouselProducts";

type Props = {
  messages: MessageInterface[];
  isLoadMessageAI: boolean;
};

export const BodyChat = ({ messages, isLoadMessageAI }: Props) => {
  const chatContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <section
      ref={chatContainerRef}
      className="h-[calc(100%-150px)] overflow-y-auto w-full px-2 py-4 flex flex-col gap-4"
    >
      {messages.length > 0 &&
        messages.map((message) => (
          <>
            {message.sender ? (
              <Message
                sendAt={message.sendAt}
                textMessage={message.message || ""}
                sender={message.sender}
                key={message.id}
              />
            ) : (
              message.products &&
              message.products.length > 0 && (
                <ProductCarousel message={message} />
              )
            )}
          </>
        ))}

      {isLoadMessageAI && <LoadingDots />}
    </section>
  );
};
