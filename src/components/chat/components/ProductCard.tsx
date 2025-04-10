import { useMemo } from "react";
import { WizyProductsInterface } from "../../../interfaces/wizyProducts.interface";

interface Props {
  product: WizyProductsInterface;
}

function ProductCard({ product }: Props) {
  const randomPrice = useMemo(() => {
    return (Math.random() * 100).toFixed(2);
  }, []);
  return (
    <div className="flex-shrink-0 w-[250px] md:w-[300px] bg-white  rounded-lg shadow-cards  p-4 flex items-center space-x-4">
      <img
        src={product.imageUrl}
        alt={product.displayTitle}
        className="w-16 h-16 md:w-20 md:h-20 object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-center overflow-hidden">
        <h3 className="text-sm truncate  ">{product.displayTitle}</h3>
        <p className="text-lg md:text-xl font-bold text-gray-900 mt-1">
          ${randomPrice}
        </p>
        <a
          href={product.url}
          className="text-sm md:text-base text-blue-600 hover:text-blue-800 hover:underline mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Page
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
