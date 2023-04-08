"use client";

import { ChangeEvent, FC, useState } from "react";
import styles from "./searchbar.module.css";

import { FaFilter } from "react-icons/fa";

interface SearchBarPropType {
  id: string;
  type: string;
  name: string;
  value: string;
  placeHolder: string;
  currentState: string;
  onChangeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTypeEvent: () => void;
}

const SearchBar: FC<SearchBarPropType> = ({
  id,
  type,
  name,
  value,
  placeHolder,
  currentState,
  onChangeEvent,
  onChangeTypeEvent,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleDropdownEvent = () => {
    console.log(isOpenModal);
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      <div className={styles.search_input_container}>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          className={`${styles.search_input} ${
            currentState === "error" && styles.search_error
          }`}
          onChange={onChangeEvent}
          placeholder={placeHolder}
        />
        <FaFilter
          color="black"
          size={"1.2rem"}
          className={styles.search_input_icon}
          onClick={() => {
            onChangeTypeEvent();
            handleDropdownEvent();
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
