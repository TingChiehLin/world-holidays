"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import { ChangeEvent, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleOnChangeTypeEvent = () => {
    console.log("handleOnChangeTypeEvent ----");
  };
  return (
    <main className={styles.container}>
      <h1>Holidays across the world</h1>
      <div className={`${styles.flexCenter} ${styles.marginTop}`}>
        <SearchBar
          id={"search-box"}
          type={"text"}
          name={"search-box"}
          value={searchText}
          placeHolder={"Search country"}
          onChangeEvent={handleOnChangeEvent}
          onChangeTypeEvent={handleOnChangeTypeEvent}
        />
        <div>{searchText}</div>
      </div>
    </main>
  );
};

export default Home;
