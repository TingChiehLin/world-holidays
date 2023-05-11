import { useQuery } from "react-query";

//calendarific.tsx
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const API_ENDPOINT = `https://calendarific.com/api/v2/`;

export const useCountries = (fetchFun: any) => {
  return useQuery("countries", fetchFun, {
    enabled: false,
    onError: (error: any) => console.log(error.message),
  });
};

export const useHolidays = ({
  symbolCountry,
  holidayTypes,
  fetchFun,
}: {
  symbolCountry: String;
  holidayTypes: String;
  fetchFun: any;
}) => {
  return useQuery(
    ["holidays", symbolCountry, holidayTypes],
    () => fetchFun({ symbolCountry, holidayTypes }),
    {
      enabled: !!symbolCountry,
    }
  );
};
