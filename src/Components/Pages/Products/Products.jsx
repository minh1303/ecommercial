import {  useEffect, useState } from "react";
import Header from "../../Header/Header";
import Product from "./Product";
import styles from "./Products.module.css";
const Products = () => {

  const [products, setProducts] = useState([]);
  let productsDisplay; 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json)
      });
  }, []);
  if (products.length > 0) {
    productsDisplay = products.map(item => {
        return <Product key={item.id} item={item}></Product>
    })
  }
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>{products.length > 0 && productsDisplay}</main>
    </div>
  );
};

export default Products;
