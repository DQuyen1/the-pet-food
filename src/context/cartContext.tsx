import { createContext, useState, useContext, ReactNode } from "react";

// Define the structure of cart items
type CartItem = {
  cartItemId: number;
  productId: number;
  quantity: number;
  productName: string;
  productPrice: number;
};

// Define the structure of the context value
interface CartContextType {
  cart: CartItem[];
  addItemToCart: (
    cartItemId: number,
    productId: number,
    quantity: number,
    productName: string,
    productPrice: number
  ) => void;
  updateItemQuantity: (cartItemId: number, quantity: number) => void;
  removeItemFromCart: (cartItemId: number) => void;
  clearCart: () => void;
}

// Create the context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom Hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // const addItemToCart = (
  //   cartItemId: number,
  //   productId: number,
  //   quantity: number
  // ) => {
  //   setCart((prevCart) => [...prevCart, { cartItemId, productId, quantity }]);
  // };

  // const addItemToCart = (
  //   cartItemId,
  //   productId,
  //   quantity,
  //   productName,
  //   productPrice
  // ) => {
  //   setCart((prevCart) => {
  //     const newCart = [
  //       ...prevCart,
  //       { cartItemId, productId, quantity, productName, productPrice },
  //     ];
  //     console.log("Updated Cart Array:", newCart); // Check cart contents here
  //     return newCart;
  //   });
  // };

  const addItemToCart = (
    cartItemId,
    productId,
    quantity,
    productName,
    productPrice
  ) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart by productId
      const itemExists = prevCart.find((item) => item.productId === productId);

      if (itemExists) {
        // If it exists, increase the quantity
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If it doesn't exist, add it as a new item
        const newCart = [
          ...prevCart,
          { cartItemId, productId, quantity, productName, productPrice },
        ];
        console.log("Updated Cart Array:", newCart);
        return newCart;
      }
    });
  };

  const updateItemQuantity = (cartItemId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const removeItemFromCart = (cartItemId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        updateItemQuantity,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
