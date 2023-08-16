import { createContext } from "react";
import { useState } from "react";
export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// eslint-disable-next-line react/prop-types
const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const findIndex = (item) => {
    let index;
    cartItems.forEach((e, i) => {
      if (e.id === item.id) {
        index = i;
      }
    });
    return index;
  };

  const addToCart = (item, quantity = 1) => {
    let index = findIndex(item);
    quantity = +quantity;
    if (quantity < 0) return alert("Quantity has to be a positive number!");
    if (index >= 0) {
      const arr = [...cartItems];
      arr[index] = {
        ...arr[index],
        quantity: arr[index].quantity + quantity,
      };
      setCartItems(arr);
    } else setCartItems((prev) => [...prev, { ...item, quantity }]);
  };

  const removeFromCart = (item) => {
    let index = findIndex(item);
    if (index >= 0) {
      if (item.quantity <= 1) {
        setCartItems((prev) => {
          return prev.filter((e) => {
            return e.id !== item.id;
          });
        });
      } else {
        const arr = [...cartItems];
        arr[index] = {
          ...arr[index],
          quantity: arr[index].quantity - 1,
        };
        setCartItems(arr);
      }
    }
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
