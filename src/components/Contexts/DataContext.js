import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [firstData, setFirstData] = useState("");
  const [secondData, setSecondData] = useState("");
  const [inputErrors, setInputErrors] = useState({});

  return (
    <DataContext.Provider
      value={{
        firstData,
        setFirstData,
        secondData,
        setSecondData,
        inputErrors,
        setInputErrors,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
