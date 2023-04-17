"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import { useQuery } from "react-query";

import styles from "./Home.module.css";

import SPINNER from "../../public/assets/imgs/loading-spin.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import Table from "@/components/Table";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [currentState, setCurrentState] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  // const [holidays, setHolidays] = useState<any>([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `https://calendarific.com/api/v2/holidays?`;
  const testURL = "https://rickandmortyapi.com/api/character";
  const searchURL = `${URL}api_key=${API_KEY}&country=${searchText.trim()}&year=2022`;
  const countriesURL = `https://calendarific.com/api/v2/countries?api_key=${API_KEY}`;
  const fetchHolidays = async () => {
    const response = await fetch(searchURL);
    return response.json();
  };

  const fetchCountries = async () => {
    const response = await fetch(countriesURL);
    return response.json();
  };

  //["holidays",page]
  // The problem here is loading home page. It will immediately to fetch data.
  //I want to fetch data when users submit when they type.
  const { data, status, isPreviousData, isLoading, isError, refetch } =
    useQuery("holidays", fetchHolidays, { enabled: false });
  //const countries = useQuery('countries',fetchCountries)
  //console.log('countries:',countries);
  console.log("holiday:", data?.response.holidays);
  const holidayData = data?.response.holidays;
  const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleOnChangeTypeEvent = () => {
    //handle Type
  };
  const handleSubmitEvent = () => {
    //&country=US&year=2019&type=local`
    refetch();
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
      <div className={`${styles.flexbox} ${styles.marginTop}`}>
        <SearchBar
          id={"search-box"}
          type={"text"}
          name={"search-box"}
          value={searchText}
          placeholder="Search country"
          currentState={status}
          isInvalid={false}
          onChange={handleOnChangeEvent}
          onClick={handleOnChangeTypeEvent}
        />
        <Button text={"Submit"} onClickEvent={handleSubmitEvent} />
      </div>
      <Table tableData={holidayData} currentState={status} />
      {isLoading && (
        <div className={styles.loading_spinner}>
          <Image src={SPINNER} alt={"loading"} width={72} height={72} />
        </div>
      )}
    </main>
  );
};

export default Home;
