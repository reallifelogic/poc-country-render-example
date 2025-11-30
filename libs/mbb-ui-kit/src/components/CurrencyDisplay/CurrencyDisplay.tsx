import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { useCountry } from '../../context/CountryContext';
import { getCurrencyConfig } from './config';

interface CurrencyDisplayProps {
  amount: number;
  style?: TextStyle;
  showCode?: boolean;
}

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  amount,
  style,
  showCode = false,
}) => {
  const { country } = useCountry();
  const config = getCurrencyConfig(country);

  const formatAmount = (): string => {
    const formatted = amount.toLocaleString(config.locale, {
      minimumFractionDigits: config.decimals,
      maximumFractionDigits: config.decimals,
    });

    if (config.position === 'prefix') {
      return `${config.symbol}${formatted}${showCode ? ` ${config.code}` : ''}`;
    } else {
      return `${formatted}${config.symbol}${showCode ? ` ${config.code}` : ''}`;
    }
  };

  return <Text style={[styles.text, style]}>{formatAmount()}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
