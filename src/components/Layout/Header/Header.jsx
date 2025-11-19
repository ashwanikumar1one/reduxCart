import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toogleCart } from "../../../store/ui-slice";
import Button from "../../UI/Button/Button";
import styles from "./Header.module.css";

function Header() {
  const { totalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <header>
        <h1>ReduxCart</h1>
        <Button color="aqua" onClick={() => dispatch(toogleCart())}>
          My Cart <span>{totalQuantity}</span>
        </Button>
      </header>
    </div>
  );
}

export default Header;
