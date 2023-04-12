import { FC, useState } from "react";
import styles from "./checkbox.module.css";

interface CheckboxPropType {}

const Checkbox: FC<CheckboxPropType> = () => {
  return (
    <>
      <input
        className={styles.checkbox_container}
        type="checkbox"
        id="checkbox"
        // checked={}
      />
      <label htmlFor=""></label>
    </>
  );
};

export default Checkbox;
