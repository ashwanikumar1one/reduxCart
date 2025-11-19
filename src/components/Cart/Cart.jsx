import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import s from "./Cart.module.css";
import { addItem, removeItem } from "../../store/cart-slice";

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const cartTotal = items?.reduce((acc, item) => {
    return acc + item.quantity * item.item.price;
  }, 0);

  function handleIncrease(product) {
    dispatch(addItem(product));
  }

  function handleDecrease(id) {
    dispatch(removeItem(id));
  }

  return (
    <div className={s.cart}>
      <div className={s.inner_cart}>
        <div className={s.inner_cart_head}>
          {items.length === 0 ? (
            <p className="product_line">Your Cart is Empty! ☹️</p>
          ) : (
            <>
              <h2>Your Shopping Cart</h2>
              <span>🛒 ${cartTotal.toFixed(2)}</span>
            </>
          )}
        </div>

        {items.map(({ item, quantity }) => {
          const { title, price, id } = item;

          return (
            <div className={s.cart_item} key={id}>
              <div>
                <h1>{title}</h1>
                <p>
                  <span>×{quantity}</span>
                </p>
              </div>
              <div>
                <p>
                  <span>${(price * quantity).toFixed(2)}</span>
                  <i>(${price} /item)</i>
                </p>

                <div className={s.cart_actions}>
                  <Button color="#ffff" onClick={() => handleDecrease(id)}>
                    -
                  </Button>
                  <Button color="#ffff" onClick={() => handleIncrease(item)}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
