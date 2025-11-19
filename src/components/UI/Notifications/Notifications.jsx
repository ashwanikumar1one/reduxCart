import React from "react";
import styles from "./Notifications.module.css";

function Notifications({ notification: { title, status, message } }) {
  // console.log(title, status, message);

  let specialClasses = "";

  if (status === "error") {
    specialClasses = styles.error;
  }

  if (status === "success") {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h3>{title}</h3>
      <p>{message}</p>
    </section>
  );
}

export default Notifications;
