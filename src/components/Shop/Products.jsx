import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import products from "../../assets/products";
import styles from "./Products.module.css";
import { addItem } from "../../store/cart-slice";

function Products() {
  const dispatch = useDispatch();

  function handleAddProduct(product) {
    dispatch(addItem(product));
  }

  return (
    <>
      <p className="product_line">
        {products ? "Buy your favorite products" : "No Products Available"}
      </p>

      {products?.map((product) => {
        const { id, title, price, description } = product;

        return (
          <div className={styles.box} key={id}>
            <div>
              <h2>{title}</h2>
              <span>${price}</span>
            </div>
            <div>
              <p>{description}</p>
              <Button color="#309bff" onClick={() => handleAddProduct(product)}>
                Add to Cart
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Products;
