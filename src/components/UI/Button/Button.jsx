import React from "react";
import styles from "./Button.module.css";

function Button({ children, color, ...props }) {
  const inlineStyles = {
    color: color || "inherit",
    border: color ? `1px solid ${color}` : "none",
  };

  return (
    <button style={inlineStyles} className={styles.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
