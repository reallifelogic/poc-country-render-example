import { CountryCode } from '../../../context/CountryContext';
import { idCurrencyConfig } from './id';
import { myCurrencyConfig } from './my';
import { sgCurrencyConfig } from './sg';

export interface CurrencyConfig {
  code: string;
  symbol: string;
  position: 'prefix' | 'suffix';
  decimals: number;
  locale: string;
  thousandSeparator: string;
  decimalSeparator: string;
}

const currencyConfigs: Record<CountryCode, CurrencyConfig> = {
  ID: idCurrencyConfig,
  MY: myCurrencyConfig,
  SG: sgCurrencyConfig,
};

export const getCurrencyConfig = (country: CountryCode): CurrencyConfig => {
  return currencyConfigs[country];
};
