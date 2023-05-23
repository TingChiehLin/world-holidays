import { ChangeEvent, FC } from "react";

import styles from "./radio.module.css";

interface RadioPropType {
  option: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioPropType> = ({ option, value, onChange }) => {
  return (
    <div className={styles.radioContainer}>
      <input
        type="radio"
        id={option}
        name="filter type"
        value={option}
        checked={option === value}
        onChange={onChange}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default Radio;
