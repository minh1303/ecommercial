import { useCallback, useContext } from "react";
import styles from "./CartItem.module.css";
import { ShopContext } from "../../../ShopContext";
/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(ShopContext);
  const addButtonOnClick = useCallback(() => {
    addToCart(item, 1);
  }, [addToCart, item]);
  const subtractButtonOnClick = useCallback(() => {
    removeFromCart(item);
  }, [removeFromCart, item]);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{item.title}</p>
      <img src={item.image} alt="" />
      <div className={styles.quantity}>
        <button onClick={subtractButtonOnClick}>-</button>
        <p>{item.quantity}</p>
        <button onClick={addButtonOnClick}>+</button>
      </div>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}>${item.price}</p>
    </div>
  );
};

export default CartItem;
