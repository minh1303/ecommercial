import { useContext, useState } from "react";
import styles from "./Product.module.css"
import { ShopContext } from "../../../ShopContext";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
const Product = ({item}) => {
  let navigate = useNavigate()
  const onClick = useCallback((e) => {
    if(e.target.id === "button" || e.target.id === "input") return
    navigate(`/product/${item.id}`)
  },[item, navigate])
  const {title, image} = item
  const {addToCart} = useContext(ShopContext)
  const [quantityInput, setQuantityInput] = useState(1)
  return (
   
    <div onClick={onClick} className={styles.card}>
      <p>{title}</p>
      <img src={image} alt={title} />
      <p>Price: ${item.price}</p>
      <p>Quantity:</p>
      <input id="input" type="number" value={quantityInput} onChange={(e) => {
        setQuantityInput(e.target.value)
      }}/>
      <button id="button" onClick={() => {
        addToCart(item,quantityInput)
      }}>Add to Cart</button>
    </div>
  );
};


export default Product;
