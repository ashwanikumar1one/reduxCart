import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Notifications from "./components/UI/Notifications/Notifications";
import { fetchCart, sendCartData } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();

  const { items, totalQuantity } = useSelector((state) => state.cart);
  const { changeFlag } = useSelector((state) => state.cart);
  const { cartIsVisible, notification } = useSelector((state) => state.ui);

  // Fetching cart on First Render
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // Sending cart to the Database Except during the First Render
  useEffect(() => {
    if (!changeFlag) {
      return;
    }

    dispatch(sendCartData({ items, totalQuantity }));
  }, [items, totalQuantity, changeFlag, dispatch]);

  return (
    <>
      {notification && <Notifications notification={notification} />}
      <Header />
      {cartIsVisible && <Cart />}
      <Products />
    </>
  );
}

export default App;
