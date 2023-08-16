import { useContext, useMemo } from "react";
import Header from "../../Header/Header";
import { ShopContext } from "../../../ShopContext";
import CartItem from "./CartItem";
import styles from "./Cart.module.css"
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const total = useMemo(() => {
    return cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [cartItems]);
  const cartItemsDisplay = cartItems.map((item) => {
    return <CartItem key={item.id} item={item}></CartItem>;
  });
  return (
    <div>
      <Header></Header>
      <main className={styles.cart}>
        <div className={styles.titles}>
          <p>Name</p>
          <p>Image</p>
          <p>Quantity</p>
          <p className={styles.description}>Description</p>
          <p>Price</p>
        </div>
        {cartItemsDisplay}
        <p className={styles.total}>Total: ${total}</p>
      </main>
    </div>
  );
};

export default Cart;
