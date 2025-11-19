# 🛒 Redux Cart — Practice Project

A simple shopping cart application built with **React** and **Redux Toolkit** to practice essential concepts like state management, reducers, actions, async thunks, and **Firebase** integration.

---

## 🎯 Project Focus & Learning Objectives

This project was developed to gain a deep understanding of:

* **Redux Toolkit** slices (`createSlice`).
* Writing pure reducers and ensuring **state immutability**.
* Implementing **Async Thunks** (e.g., `fetchCart`, `sendCartData`) for side effects.
* Connecting React components to the Redux state.
* Cart item management (add/remove logic).
* Auto-syncing application state to an external database (Firebase).
* Providing user feedback with **notifications** for async operations.

---

## 🚀 Features

### Cart Functionality
* **Add Items:** Add any product from the shop list. Increases quantity if the item already exists in the cart.
* **Remove Items:** Decrease quantity or completely remove the item if the count reaches zero.

### Firebase Integration
* Syncs the entire cart state to a Firebase Realtime Database.
* Fetches existing cart data when the app first loads.
* Uses the `PUT` method for replacing the entire cart state upon changes.

### Redux State Structure Example

```js
cart = {
  items: [
    { item: { /* product data */ }, quantity: Number }
  ],
  totalQuantity: Number,
  changeFlag: Boolean   // tracks user-triggered changes to prevent infinite loops
}
````

### Async Operations & UI

  * **Async Thunks:** Dedicated thunks like `fetchCart()` (load from DB) and `sendCartData()` (save to DB).
  * **UI Notifications:** Provides distinct Pending, Success, and Error notifications for all async requests.

-----

## 📦 Tech Stack

  * **React**
  * **Redux Toolkit**
  * **Firebase** Realtime Database
  * JavaScript (ES6+)
  * Fetch API


---

## 📸 Screenshots

<img width="1440" height="805" alt="Screenshot 2025-11-19 at 1 25 04 PM" src="https://github.com/user-attachments/assets/9d8ab4fd-5752-4e22-8de4-b3abbc0e5505" />
<img width="1284" height="804" alt="Screenshot 2025-11-19 at 1 25 24 PM" src="https://github.com/user-attachments/assets/f15b9633-42ba-405c-95d8-58b4e1449694" />




-----

## 📝 What I Learned

  * Mastering **Redux Toolkit slices** (`createSlice`).
  * Using **thunks** to manage complex async tasks that interact with state and the database.
  * Optimizing performance by correctly using `useSelector` to **avoid unnecessary re-renders**.
  * Implementing flags (`changeFlag`) to **fix infinite loops** during cart state syncing.
  * Understanding the difference between **`PUT` and `POST`** for Firebase updates.
  * Ensuring the correct data shape throughout the application to prevent tricky runtime errors (e.g., "findIndex is not a function").

-----

## ▶️ Run Locally

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the app:**
    ```bash
    npm run dev
    ```

> 💡 **Note:** This is a practice-focused project dedicated to learning Redux deeply, explore concepts, debug issues, and understand async state management, and more.
