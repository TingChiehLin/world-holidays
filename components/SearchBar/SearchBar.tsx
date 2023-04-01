"use client";
import { ChangeEvent, FC } from "react";

import styles from "./searchbar.module.css";

interface SearchBarPropType {
  id: string;
  type: string;
  name: string;
  value: string;
  placeHolder: string;
  onChangeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarPropType> = ({
  id,
  type,
  name,
  value,
  placeHolder,
  onChangeEvent,
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className={styles.search_input}
        onChange={onChangeEvent}
        placeholder={placeHolder}
      ></input>
    </>
  );
};

export default SearchBar;
