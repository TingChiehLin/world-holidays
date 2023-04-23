"use client";

import { ChangeEvent, FC, useState } from "react";
import styles from "./searchbar.module.css";

import { FaFilter } from "react-icons/fa";

interface SearchBarPropType {
  id: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  currentState: string;
  isInvalid: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const initialCheckboxData = {
  nationalHoliday: false,
  observance: false,
  localHoliday: false,
  season: false,
};

const holidayTypeList = Object.keys(initialCheckboxData);

const SearchBar: FC<SearchBarPropType> = ({
  id,
  type,
  name,
  value,
  placeholder,
  currentState,
  isInvalid,
  onChange,
  onClick,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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
          onChange={onChange}
          placeholder={placeholder}
        />
        <FaFilter
          color="black"
          size={"1.2rem"}
          className={styles.search_input_icon}
          onClick={() => {
            onClick();
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
