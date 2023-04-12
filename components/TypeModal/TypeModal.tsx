import { FC } from "react";
import styles from "./TypeModal.module.css";

interface TypeModalTypeProp {
  children: React.ReactNode;
}

const TypeModal: FC<TypeModalTypeProp> = ({ children }) => {
  return (
    <>
      <fieldset className={styles.type_modal_container}>
        <legend>
          <h3>Filter by Status</h3>
        </legend>
        {children}
      </fieldset>
    </>
  );
};

export default TypeModal;
