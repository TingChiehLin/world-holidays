import { FC } from "react";
import styles from "./button.module.css";

interface ButtonTypeProp {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonTypeProp> = ({ children, onClick }) => {
  return (
    <button className={styles.button_container} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
