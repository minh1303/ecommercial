import { NavLink, Link } from "react-router-dom";
import carticon from "../../assets/carticon.svg";
import styles from "./Header.module.css";
import { ShopContext } from "../../ShopContext";
import { useContext, useMemo,  } from "react";
const Header = () => {
  const { cartItems } = useContext(ShopContext);
  const totalCartItem = useMemo(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  }, [cartItems]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Electronic Shop</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li >
            <NavLink to={"/cart"}>
              <img src={carticon} />
            </NavLink>
            <span>{totalCartItem}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
