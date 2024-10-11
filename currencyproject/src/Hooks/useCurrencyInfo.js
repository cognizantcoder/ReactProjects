import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null); // Initialize with `null` or an appropriate default value
  const [error, setError] = useState(null); // State to store any potential errors

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch currency data:", error);
      }
    };

    if (currency) {
      fetchCurrencyData();
    }
  }, [currency]);

  return {}; // Return both data and error
}

export default useCurrencyInfo;
