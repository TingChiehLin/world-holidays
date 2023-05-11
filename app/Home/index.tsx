"use client";

import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { NextPage } from "next";
import { useQuery } from "react-query";

import styles from "./Home.module.css";

import SPINNER from "../../public/assets/imgs/loading-spin.svg";
import TRAVEL_IMG from "../../public/assets/imgs/travel.svg";

import SearchBar from "@/components/SearchBar/SearchBar";
import Table from "@/components/Table";
import Button from "@/components/Button";
import TypeModal from "@/components/TypeModal/TypeModal";
import Radio from "@/components/Radio";
import {
  API_ENDPOINT,
  API_KEY,
  useCountries,
  useHolidays,
} from "@/services/calendarific";

const raleway = Raleway({ subsets: ["latin"] });

const initialHolidayTypes = {
  national: "national",
  local: "local",
  religious: "religious",
  observance: "observance",
};

const fetchCountries = async () => {
  console.log("response1:");
  const countriesURL = `${API_ENDPOINT}countries?api_key=${API_KEY}`;
  const response = await fetch(countriesURL);
  console.log("response countries:", response);
  return response.json();
};

const fetchHolidays = async ({
  symbolCountry,
  holidayTypes,
}: {
  symbolCountry: string;
  holidayTypes: string;
}) => {
  const searchURL = `${API_ENDPOINT}holidays?api_key=${API_KEY}&country=${symbolCountry}&year=2022${
    holidayTypes && `&type=${holidayTypes}`
  }`;
  const response = await fetch(searchURL);
  console.log("response holiday:", response);
  return response.json();
};

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchError, setSearchError] = useState<boolean>(false);
  const [symbolCountry, setSymbolCountry] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [holidayTypes, setHolidayTypes] = useState<string>("");

  const {
    data,
    status,
    isLoading,
    isError,
    error,
    // refetch: fetchHolidayRefetch,
  } = useHolidays({ symbolCountry, holidayTypes, fetchFun: fetchHolidays });

  // const {
  //   data: countriesData,
  //   // refetch: fetchCountriesRefetch
  // } = useQuery("countries", fetchCountries, {
  //   enabled: false,

  //   onError: (error: any) => console.log(error.message),
  // });

  const { data: countriesData } = useCountries(fetchCountries);

  const holidayData = data?.response.holidays;
  const holidaysList = Object.keys(initialHolidayTypes);

  const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleOnSearchClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setHolidayTypes(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submit", searchText);
    if (searchText.trim() === "") {
      return;
    }

    const countries = countriesData?.response.countries;
    const findCertainCountry = countries?.find(
      ({ country_name }: any) =>
        country_name.toLowerCase() === searchText.trim().toLowerCase()
    );
    const symbol = findCertainCountry?.["iso-3166"];
    if (!symbol) {
      setSearchError(true);
    } else {
      setSymbolCountry(symbol);
      setSearchError(false);
    }
    console.log("Refresh");
  };

  // useEffect(() => {
  //   if (!symbolCountry) return;
  //   // fetchHolidayRefetch();
  // }, [symbolCountry, holidayTypes]);

  if (isError) {
    return <div>Error...${JSON.stringify(error)}</div>;
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
          isInvalid={searchError}
          onChange={handleOnSearchChange}
          onClick={handleOnSearchClick}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <TypeModal>
        {holidaysList.map((option: string) => {
          return (
            <Radio
              key={option}
              option={option}
              value={holidayTypes}
              onChange={handChangeType}
            />
          );
        })}
      </TypeModal>
      {!holidayData && (
        <div className={styles.imageCenterContainer}>
          {searchError && <p>Search Error, Country not found</p>}
          <Image src={TRAVEL_IMG} alt={"travel_img"} width={360} height={360} />
          <span className={styles.textCenter}>Please Search a country</span>
        </div>
      )}
      {holidayData && <Table tableData={holidayData} />}
      {isLoading && (
        <div className={styles.loading_spinner}>
          <Image src={SPINNER} alt={"loading"} width={72} height={72} />
        </div>
      )}
    </main>
  );
};

export default Home;
