import { ChangeEvent, FC } from "react";

import styles from "./radio.module.css";

interface RadioPropType {
  option: string;
  currentValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioPropType> = ({ option, currentValue, onChange }) => {
  return (
    <div className={styles.radioContainer}>
      <input
        type="radio"
        id={option}
        name="filter type"
        value={option}
        checked={option === currentValue}
        onChange={onChange}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default Radio;
