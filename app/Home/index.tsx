"use client";

import { ChangeEvent, useState, useEffect } from "react";
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
  const [symbolCountry, setSymbolCountry] = useState<string>("");
  const [currentState, setCurrentState] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `https://calendarific.com/api/v2/holidays?`;
  const countriesURL = `https://calendarific.com/api/v2/countries?api_key=${API_KEY}`;
  const searchURL = `${URL}api_key=${API_KEY}&country=${symbolCountry}&year=2022`;

  const fetchCountries = async () => {
    const response = await fetch(countriesURL);
    console.log("3 - fetch country");
    return response.json();
  };

  const fetchHolidays = async () => {
    const response = await fetch(searchURL);
    return response.json();
  };

  const {
    data,
    status,
    isPreviousData,
    isLoading,
    isError,
    refetch: fetchHolidayRefetch,
  } = useQuery("holidays", fetchHolidays, {
    enabled: false,
    onSuccess: (dataRetrieved) => {},
  });

  const { data: countriesData, refetch: fetchCountriesRefetch } = useQuery(
    "countries",
    fetchCountries,
    {
      enabled: false,
      onSuccess: (dataRetrieved) => {
        const countries = dataRetrieved?.response.countries;
        console.log("countries:", countries);
        console.log("searchText", searchText);
        // type issues, any better name for type of country_name? not always any
        const findCertainCountry = countries?.find(
          ({ country_name }: any) =>
            country_name.toLowerCase() === searchText.trim().toLowerCase()
        );
        console.log("findCertainCountry:", findCertainCountry);
        const symbol = findCertainCountry?.["iso-3166"];
        console.log("symbol:", symbol);
        setSymbolCountry(symbol);
        console.log("4");
      },
      onError: (error: any) => console.log(error.message),
    }
  );
  console.log("symbolCountry:", symbolCountry);
  //------issues, the first time is fail
  const holidayData = data?.response.holidays;
  console.log("Holiday:", holidayData);

  const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleDropdownEvent = () => {
    console.log("isOpenModal", isOpenModal);
    setIsOpenModal(!isOpenModal);
  };

  const handleSubmitEvent = () => {
    if (searchText.trim() === "") {
      return;
    }
    console.log("1");
    fetchCountriesRefetch();
    console.log("2");
  };

  useEffect(() => {
    if (!symbolCountry) return;
    fetchHolidayRefetch();
  }, [symbolCountry]);

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
          onClick={handleDropdownEvent}
        />
        <Button text={"Submit"} onClickEvent={handleSubmitEvent} />
      </div>
      <Table tableData={data} currentState={status} />
      {isLoading && (
        <div className={styles.loading_spinner}>
          <Image src={SPINNER} alt={"loading"} width={72} height={72} />
        </div>
      )}
    </main>
  );
};

export default Home;
