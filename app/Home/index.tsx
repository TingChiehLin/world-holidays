"use client";

import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import { useQuery } from "react-query";

import styles from "./Home.module.css";

import SPINNER from "../../public/assets/imgs/loading-spin.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import TableSection from "@/components/TableSection";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [currentState, setCurrentState] = useState<string>("");
  // const [holidays, setHolidays] = useState<any>([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `https://calendarific.com/api/v2/holidays?`;
  const testURL = "https://rickandmortyapi.com/api/character";

  const fetchHolidays = async () => {
    const searchURL = `${URL}api_key=${API_KEY}&country=${searchText}&year=2022`;
    const response = await fetch(URL);
    return response.json();
  };
  //["holidays",page]
  // The problem here is loading home page. It will immediately to fetch data.
  //I want to fetch data when users submit when they type.
  const { data, status, isPreviousData, isLoading, isError } = useQuery(
    "holidays",
    fetchHolidays
  );
  console.log("Data", data);
  console.log("status", status);
  const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleOnChangeTypeEvent = () => {
    console.log("handleOnChangeTypeEvent ----");
  };
  const handleSubmitEvent = () => {
    //&country=US&year=2019&type=local`
  };

  /*
  - [ ]  Search by holiday “Type”.
  - the API accepts [4 types](https://calendarific.com/api-documentation), and you can pass it in the endpoint as a param:
  `api/v2/holidays?&api_key=key&country=US&year=2019**&type=local**`
  - [ ]  Bonus: (junior-mid) Implement a dropdown as shown in the mockup above.
  national - Returns public, federal and bank holidays
local - Returns local, regional and state holidays
religious - Return religious holidays: buddhism, christian, hinduism, muslim, etc
observance - Observance, Seasons, Times
  */

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <main className={styles.container}>
      <h1>Holidays across the world</h1>
      <div className={`${styles.flexLeftCenter} ${styles.marginTop}`}>
        <SearchBar
          id={"search-box"}
          type={"text"}
          name={"search-box"}
          value={searchText}
          placeHolder={"Search country"}
          currentState={status}
          onChangeEvent={handleOnChangeEvent}
          onChangeTypeEvent={handleOnChangeTypeEvent}
        />
        <Button text={"Submit"} onClickEvent={handleSubmitEvent} />
      </div>
      <TableSection tableData={{}} currentState={status} />
      {isLoading && (
        <div className={styles.loading_spinner}>
          <Image src={SPINNER} alt={"loading_spinner"} width={72} height={72} />
        </div>
      )}
    </main>
  );
};

export default Home;
