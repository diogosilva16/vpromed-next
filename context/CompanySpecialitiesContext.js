import { createContext, useEffect, useState } from "react";

export const CompanySpecialitiesContext = createContext();

const API_KEY = process.env.API_KEY;

export function CompanySpecialitiesContextProvider({ children }) {
  const [espec, setEspec] = useState([]);
  const [especIsLoading, setEspecIsLoading] = useState(true);
  const [especHasError, setEspecHasError] = useState(false);

  const getEspec = async () => {
    try {
      const response = await fetch(
        `https://www.vmedapi.criteclx.com/api/articlebycat/${API_KEY}/3/1`
      );
      const data = await response.json();
      setEspec(data);
      setEspecIsLoading(false);
    } catch (error) {
      setEspecHasError(true);
      setEspecIsLoading(false);
    }
  };

  useEffect(() => {
    getEspec();
  }, []);

  return (
    <CompanySpecialitiesContext.Provider
      value={{ espec, especHasError, especIsLoading }}
    >
      {children}
    </CompanySpecialitiesContext.Provider>
  );
}
