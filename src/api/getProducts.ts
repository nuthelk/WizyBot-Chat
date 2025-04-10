import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(
      "https://api.wizybot.com/products/demo-product-list"
    );

    const products = [...data];

    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]];
    }

    const randomProducts = products.slice(0, 3);

    return randomProducts;
  } catch (error) {
    console.error("Error in obtaining the products:", error);
    return [];
  }
};
