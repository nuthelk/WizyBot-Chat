type Props = {
  textMessage: string;
  sendAt: string;
  sender: "user" | "ai";
};

export const Message = ({ textMessage, sendAt, sender }: Props) => {
  return (
    <div
      className={`w-full flex ${
        sender != "ai" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`p-3 rounded-lg w-[200px] ${
          sender === "ai" ? "bg-gray-200 " : "bg-blue-300"
        } flex flex-col gap-2`}
      >
        <p className="text-sm">{textMessage}</p>
        <p className="text-xs text-gray-600">{sendAt}</p>
      </div>
    </div>
  );
};
