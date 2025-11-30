import React, { createContext, useContext, ReactNode } from 'react';

export type Country = 'ID' | 'MY' | 'SG';
export type CountryCode = Country;

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

interface CountryProviderProps {
  children: ReactNode;
  initialCountry?: Country;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({
  children,
  initialCountry = 'ID',
}) => {
  const [country, setCountry] = React.useState<Country>(initialCountry);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within CountryProvider');
  }
  return context;
};
