"use client";

import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { NextPage } from "next";
import { useQuery } from "react-query";

import styles from "./Home.module.css";

import SPINNER from "../../public/assets/imgs/loading-spin.svg";
import SearchBar from "@/components/SearchBar/SearchBar";
import Table from "@/components/Table";
import Button from "@/components/Button";
import TypeModal from "@/components/TypeModal/TypeModal";
import Radio from "@/components/Radio";

const raleway = Raleway({ subsets: ["latin"] });

const initialHolidayTypes = {
  national: "national",
  local: "local",
  religious: "religious",
  observance: "observance",
};

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [symbolCountry, setSymbolCountry] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [holidayTypes, setHolidayTypes] = useState<string>("");
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `https://calendarific.com/api/v2/holidays?`;
  const countriesURL = `https://calendarific.com/api/v2/countries?api_key=${API_KEY}`;
  const searchURL = `${URL}api_key=${API_KEY}&country=${symbolCountry}&year=2022&type=${holidayTypes}`;
  const fetchCountries = async () => {
    console.log("response1:");
    const response = await fetch(countriesURL);
    console.log("response2:", response);
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
        // type issues, any better name for type of country_name? not always any
        const findCertainCountry = countries?.find(
          ({ country_name }: any) =>
            country_name.toLowerCase() === searchText.trim().toLowerCase()
        );
        const symbol = findCertainCountry?.["iso-3166"];
        setSymbolCountry(symbol);
      },
      onError: (error: any) => console.log(error.message),
    }
  );

  const holidayData = data?.response.holidays;
  const holidaysList = Object.keys(initialHolidayTypes);

  const handleOnChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleDropdownEvent = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setHolidayTypes(e.target.value);
  };

  const handleSubmitEvent = () => {
    console.log("Submit", searchText);
    if (searchText.trim() === "") {
      return;
    }
    fetchCountriesRefetch();
    console.log("Refresh");
  };

  useEffect(() => {
    if (!symbolCountry) return;
    fetchHolidayRefetch();
  }, [fetchHolidayRefetch, symbolCountry]);

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <main className={`${styles.container} ${raleway.className}`}>
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
        <Button onClickEvent={handleSubmitEvent}>Submit</Button>
      </div>
      <TypeModal>
        {holidaysList.map((option: string) => {
          return (
            <Radio
              key={option}
              option={option}
              currentValue={holidayTypes}
              onChange={handChangeType}
            />
          );
        })}
      </TypeModal>
      <Table tableData={holidayData} />
      {isLoading && (
        <div className={styles.loading_spinner}>
          <Image src={SPINNER} alt={"loading"} width={72} height={72} />
        </div>
      )}
    </main>
  );
};

export default Home;
