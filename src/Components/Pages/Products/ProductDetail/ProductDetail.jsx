/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Header from "../../../Header/Header";
import styles from "./ProductDetail.module.css";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../../ShopContext";
// eslint-disable-next-line react/prop-types
const ProductDetail = () => {
  const {addToCart} = useContext(ShopContext)
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [input,setInput] = useState(1)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [id]);
  return (
    <div>
      <Header></Header>
      {item && (
        <main className={styles.main}>
          <img src={item.image} alt="" />
          <div className={styles.container}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <div className={styles.inputbox}>
              <input onChange={(e) => {
                setInput(e.target.value)
              }} type="number" value={input} />
              <button onClick={() => {
                addToCart(item, input)
              }}>Add to cart</button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default ProductDetail;
