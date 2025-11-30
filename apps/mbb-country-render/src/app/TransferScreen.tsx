import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useCountry, CurrencyDisplay } from '@mbb-poc/mbb-ui-kit';

export const TransferScreen: React.FC = () => {
  const { country } = useCountry();
  const [amount, setAmount] = useState(1000);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payment App</Text>
        <Text style={styles.headerSubtitle}>Country: {country}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.greeting}>Welcome!</Text>

        <Text style={styles.label}>Enter Amount:</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount.toString()}
          onChangeText={(text) => setAmount(Number(text) || 0)}
        />

        <View style={styles.currencyContainer}>
          <Text style={styles.label}>Formatted Amount:</Text>
          <CurrencyDisplay
            amount={amount}
            style={styles.currencyDisplay}
            showCode={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#007AFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#007AFF',
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  currencyContainer: {
    marginBottom: 30,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  currencyDisplay: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#007AFF',
  },
});
