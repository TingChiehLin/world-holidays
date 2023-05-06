import { FC } from "react";
import styles from "./button.module.css";

interface ButtonTypeProp {
  children: React.ReactNode;
  onClickEvent: () => void;
}

const Button: FC<ButtonTypeProp> = ({ children, onClickEvent }) => {
  return (
    <button className={styles.button_container} onClick={onClickEvent}>
      {children}
    </button>
  );
};

export default Button;
