import React from 'react';
import { CountryProvider } from '@mbb-poc/mbb-ui-kit';
import type { CountryCode } from '@mbb-poc/mbb-ui-kit';
import { TransferScreen } from './TransferScreen';

export const App = () => {
  const country = (import.meta.env.VITE_COUNTRY || 'ID') as CountryCode;

  return (
    <CountryProvider initialCountry={country}>
      <TransferScreen />
    </CountryProvider>
  );
};

export default App;
