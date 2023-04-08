"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";

import styles from "./Home.module.css";

import SPINNER from "../../public/assets/imgs/loading-spin.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import TableSection from "@/components/TableSection";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [currentState, setCurrentState] = useState<string>("");
  const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleOnChangeTypeEvent = () => {
    console.log("handleOnChangeTypeEvent ----");
  };
  console.log(process.env.NEXT_PUBLIC_API_KEY);
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
          currentState={currentState}
          onChangeEvent={handleOnChangeEvent}
          onChangeTypeEvent={handleOnChangeTypeEvent}
        />
        <div>{searchText}</div>
      </div>
      <TableSection tableData={{}} currentState={currentState} />
      {currentState === "Loading" && (
        <div className={styles.loading_spinner}>
          <Image src={SPINNER} alt={"loading_spinner"} width={72} height={72} />
        </div>
      )}
    </main>
  );
};

export default Home;
