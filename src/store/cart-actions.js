import { showNotification } from "./ui-slice";
import { replaceCart } from "./cart-slice";

// SEND cart to DB
export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    try {
      const response = await fetch(
        "https://test-project-c4ece-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to send cart data!",
        })
      );
    }
  };
}

// FETCH cart from DB
export function fetchCart() {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://test-project-c4ece-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchRequest();

      if (!cartData) {
        return; // nothing in DB yet
      }

      dispatch(replaceCart(cartData));
    } catch (err) {
      console.log(err.message);
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
}
