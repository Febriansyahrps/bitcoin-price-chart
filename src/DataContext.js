import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "./components/util";

// create Context
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // create state
  const [data, setData] = useState({
    bitcoinData: {
      timestamp: [],
    },
    loading: true,
  });

  useEffect(() => {
    // fetch data
    axios
      .get(API_URL)
      .then((response) => {
        setData({
          loading: false,
          bitcoinData: response.data.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
