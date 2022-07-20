import { createContext, useEffect, useState } from "react";

export const CompanyInfoContext = createContext();

// const API_KEY = process.env.REACT_APP_TOKEN_KEY;

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
        `https://www.critecnow.com/promed/api/company/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX`
      );
      const data = await response.json();
      setCompanyInfo(data);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getDest = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/4/1`
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