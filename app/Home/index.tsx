"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";

import styles from "./Home.module.css";

import SPINNER from "../../public/assets/imgs/loading-spin.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import Table from "@/components/Table";

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

  return (
    <main className={styles.container}>
      <h1>Holidays across the world</h1>
      <div className={`${styles.flexCenter} ${styles.marginTop}`}>
        <SearchBar
          id={"search-box"}
          type="text"
          name={"search-box"}
          value={searchText}
          placeholder="Search country"
          currentState={currentState}
          isInvalid={false}
          onChange={handleOnChangeEvent}
          onClick={handleOnChangeTypeEvent}
        />
        <div>{searchText}</div>
      </div>
      <Table tableData={{}} currentState={currentState} />
      {currentState === "Loading" && (
        <div className={styles.loading_spinner}>
          <Image src={SPINNER} alt={"loading_spinner"} width={72} height={72} />
        </div>
      )}
    </main>
  );
};

export default Home;
