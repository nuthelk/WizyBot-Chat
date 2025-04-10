import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const HeaderChat = () => {
  return (
    <header className="h-[70px] shadow-lg text-white header-chat rounded-t-lg p-2">
      <div className=" flex w-full justify-between items-center">
        <div className="flex items-center gap-2">
          <FaCircleUser size={23} />
          <div>
            <p className="text-[10px] font-light">Chat with</p>
            <p className="text-xs ">[Chat Name]</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaShoppingCart />
          <IoIosArrowDown />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <div className="w-1.5 h-1.5 mb-0.5 bg-green-700 rounded-full" />
        <p className="font-light text-[10px]">We reply immediately</p>
      </div>
    </header>
  );
};
