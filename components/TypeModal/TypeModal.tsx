import { FC, useState } from "react";
import styles from "./typeModal.module.css";

interface TypeModalTypeProp {
  children: React.ReactNode;
}

const TypeModal: FC<TypeModalTypeProp> = ({ children }) => {
  return (
    <>
      <form>
        <fieldset className={styles.type_modal_container}>
          <legend>
            <h3>Filter by Status</h3>
          </legend>
          {children}
        </fieldset>
      </form>
    </>
  );
};

export default TypeModal;
