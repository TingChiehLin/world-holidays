import { FC } from "react";
import styles from "./button.module.css";

interface ButtonTypeProp {
  text: string;
  onClickEvent: () => void;
}

const Button: FC<ButtonTypeProp> = ({ text, onClickEvent }) => {
  return (
    <button className={styles.button_container} onClick={onClickEvent}>
      {text}
    </button>
  );
};

export default Button;
