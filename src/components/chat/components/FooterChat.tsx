import EmojiPicker from "emoji-picker-react";
import { RiEmojiStickerLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { useChatInput } from "../../../hooks/useChatInput";
import { MessageInterface } from "../../../interfaces/message.interface";

type Props = {
  onAddMessage: (arg: MessageInterface) => void;
};

const FooterChat = ({ onAddMessage }: Props) => {
  const {
    handleEmojiClick,
    toggleEmojiPicker,
    showEmojiPicker,
    handleKeyDown,
    handleSelect,
    inputRef,
    onChangeText,
    sendMessage,
    text,
  } = useChatInput({ onAddMessage });

  return (
    <footer className="relative h-[80px] flex items-center ">
      <div className="flex items-center gap-2 w-full px-4">
        <div className="w-full bg-neutral-200 h-[50px] rounded-full flex items-center pl-2 pr-5 justify-between">
          <button
            onClick={toggleEmojiPicker}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Abrir selector de emojis"
          >
            <RiEmojiStickerLine
              size={24}
              color={`${showEmojiPicker ? "#3a7aba" : "gray"} `}
            />
          </button>

          {showEmojiPicker && (
            <div className="absolute bottom-20 left-0">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <input
            ref={inputRef}
            placeholder="Write here..."
            className="outline-none w-full h-full px-2 text-sm"
            value={text}
            onChange={onChangeText}
            onClick={handleSelect}
            onKeyUp={handleSelect}
            onMouseUp={handleSelect}
            onKeyDown={(e) => handleKeyDown(e, text)}
          />
          <button
            onClick={() => sendMessage(text)}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100"
          >
            <IoSend color="#3a7aba" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterChat;
