import { useState, useRef, useCallback } from "react";
import { EmojiInterface } from "../interfaces/emoji.interface";
import { MessageInterface } from "../interfaces/message.interface";
import { v4 as uuidv4 } from "uuid";
import { formatDateMessage } from "../utils/formatDateMessage";

interface UseChatInputReturn {
  text: string;
  showEmojiPicker: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
  toggleEmojiPicker: () => void;
  handleEmojiClick: (emojiData: EmojiInterface) => void;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: () => void;
  sendMessage: (text: string) => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    text: string
  ) => void;
}

type Props = {
  onAddMessage: (arg: MessageInterface) => void;
};

export const useChatInput = ({ onAddMessage }: Props): UseChatInputReturn => {
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleEmojiPicker = useCallback(() => {
    setShowEmojiPicker(!showEmojiPicker);

    // Save the current cursor position when opening the picker
    if (!showEmojiPicker && inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || 0);
    }
  }, [showEmojiPicker]);

  const handleEmojiClick = useCallback(
    (emojiData: EmojiInterface) => {
      // Split the text into two parts: before and after the cursor
      const before = text.substring(0, cursorPosition);
      const after = text.substring(cursorPosition);

      // Insert emoji at cursor position
      const newText = before + emojiData.emoji + after;
      setText(newText);

      // Update the cursor position to be after the inserted emoji
      const newPosition = cursorPosition + emojiData.emoji.length;
      setCursorPosition(newPosition);

      setShowEmojiPicker(false);

      // Focuses the input and sets the cursor position after rendering
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(newPosition, newPosition);
        }
      }, 0);
    },
    [text, cursorPosition]
  );

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setCursorPosition(e.target.selectionStart || 0);
  };

  const handleSelect = () => {
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || 0);
    }
  };

  const sendMessage = useCallback(
    (text: string) => {
      if (text.trim()) {
        const message: MessageInterface = {
          id: uuidv4(),
          message: text,
          sendAt: formatDateMessage(new Date()),
          sender: "user",
        };
        onAddMessage(message);
        setText("");
      }
    },
    [onAddMessage]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, text: string) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(text);
      }
    },
    [sendMessage]
  );

  return {
    text,
    showEmojiPicker,
    inputRef,
    toggleEmojiPicker,
    handleEmojiClick,
    onChangeText,
    handleSelect,
    sendMessage,
    handleKeyDown,
  };
};
