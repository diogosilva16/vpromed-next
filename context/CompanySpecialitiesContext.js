import { createContext, useEffect, useState } from "react";

export const CompanySpecialitiesContext = createContext();

// const API_KEY = process.env.REACT_APP_TOKEN_KEY;

export function CompanySpecialitiesContextProvider({ children }) {
  const [espec, setEspec] = useState([]);
  const [especIsLoading, setEspecIsLoading] = useState(true);
  const [especHasError, setEspecHasError] = useState(false);

  const getEspec = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/3/1`
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
