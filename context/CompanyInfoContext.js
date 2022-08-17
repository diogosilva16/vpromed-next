import { createContext, useEffect, useState } from "react";

export const CompanyInfoContext = createContext();

const API_KEY = process.env.API_KEY;

export function CompanyInfoContextProvider({ children }) {
  const [companyInfo, setCompanyInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [dest, setDest] = useState([]);
  const [destIsLoading, setDestIsLoading] = useState(true);
  const [destHasError, setDestHasError] = useState(false);

  const getCompanyInfo = async () => {
    try {
      const response = await fetch(
        `https://www.vmedapi.criteclx.com/api/company/${API_KEY}`
      );
      const data = await response.json();
      setCompanyInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getDest = async () => {
    try {
      const response = await fetch(
        `https://www.vmedapi.criteclx.com/api/articlebycat/${API_KEY}/4/1`
      );
      const data = await response.json();
      setDest(data);
      setDestIsLoading(false);
    } catch (error) {
      setDestHasError(true);
      setDestIsLoading(false);
    }
  };

  useEffect(() => {
    getCompanyInfo();
    getDest();
  }, []);

  console.log(companyInfo);

  return (
    <CompanyInfoContext.Provider
      value={{
        companyInfo,
        isLoading,
        hasError,
        dest,
        destHasError,
        destIsLoading,
      }}
    >
      {children}
    </CompanyInfoContext.Provider>
  );
}