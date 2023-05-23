import { useQuery } from "react-query";

//calendarific.tsx
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const API_ENDPOINT = `https://calendarific.com/api/v2/`;

type Country = {
  country_name: string;
  "iso-3166": string;
};

interface Countries {
  response: {
    countries: Country[];
  };
}

const fetchCountries = async (): Promise<Countries> => {
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
  symbolCountry: String;
  holidayTypes: String;
}) => {
  const searchURL = `${API_ENDPOINT}holidays?api_key=${API_KEY}&country=${symbolCountry}&year=2022${
    holidayTypes && `&type=${holidayTypes}`
  }`;
  const response = await fetch(searchURL);
  console.log("response holiday:", response);
  return response.json();
};

export const useCountries = () => {
  return useQuery("countries", fetchCountries, {
    onError: (error: TypeError) => console.log(error.message),
  });
};

export const useHolidays = ({
  symbolCountry,
  holidayTypes,
}: {
  symbolCountry: String;
  holidayTypes: String;
}) => {
  return useQuery(
    ["holidays", symbolCountry, holidayTypes],
    () => fetchHolidays({ symbolCountry, holidayTypes }),
    {
      enabled: !!symbolCountry,
    }
  );
};
