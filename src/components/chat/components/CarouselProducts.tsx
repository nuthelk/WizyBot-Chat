// src/components/ProductCarousel.jsx
import ProductCard from "./ProductCard";
import { MessageInterface } from "../../../interfaces/message.interface";

interface Props {
  message: MessageInterface;
}

function ProductCarousel({ message }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div className="flex space-x-4 overflow-x-auto p-1 pb-4 scrollbar-hide">
        {message.products &&
          message.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
