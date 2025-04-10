type Props = {
  textMessage: string;
  sendAt: string;
  sender: "user" | "ai";
};

export const Message = ({ textMessage, sendAt, sender }: Props) => {
  return (
    <div
      className={`w-full flex message-appear-animation ${
        sender != "ai" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`p-3 rounded-lg w-fit max-w-[80%] sm:max-w-[70%] md:max-w-[60%] ${
          sender === "ai" ? "bg-gray-100 " : "bg-blue-300 "
        } flex flex-col gap-1`}
      >
        <p className="text-sm break-words">{textMessage}</p>
        <p className={"text-[10px] font-medium text-right text-gray-600"}>
          {sendAt}
        </p>
      </div>
    </div>
  );
};
